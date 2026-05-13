import { useState, useEffect, useRef } from "react";
import type { SelectProps } from "@/shared/types/select";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
export const CustomSelect = ({sName, options, value, onChange, placeholder="선택하세요"} : SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if(containerRef.current && containerRef.current.contains(e.target as Node)){
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);
    // console.log(value);
    return (
        <div ref={containerRef} className="customSelectWrap">
            <button onClick={() => setIsOpen(!isOpen)}
            className="customOpenBtn">
                <span>{value ? value.label : placeholder}</span>
                <span>{isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
            </button>
            { isOpen && (
                <ul className="customOpt">
                    {options.map((opt, i) => (
                        <li data-name={sName} key={"opt" + i}
                            onMouseDown={() => {
                                onChange(opt);
                                setIsOpen(false)
                            }}>
                           { opt.label }
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}