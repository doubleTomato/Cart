import { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface CustomSelectProps<T> {
    sName?: string;
    options: T[];
    value: T | null;
    onChange: (value: T) => void;
    placeholder?: string;
    getLabel: (opt: T) => string; 
    renderOption?: (opt: T) => React.ReactNode; 
}

export const CustomSelect = <T,>({
    sName,
    options,
    value,
    onChange,
    placeholder = "선택하세요",
    getLabel,
    renderOption
}: CustomSelectProps<T>) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    return (
        <div ref={containerRef} className="customSelectWrap">
            <button onClick={() => setIsOpen(!isOpen)} className="customOpenBtn">
                <span>{value ? getLabel(value) : placeholder}</span>
                <span>{isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
            </button>
            {isOpen && (
                <ul className="customOpt">
                    {options.map((opt, i) => (
                        <li 
                            data-name={sName} 
                            key={"opt" + i}
                            onMouseDown={() => {
                                onChange(opt);
                                setIsOpen(false);
                            }}
                        >
                            {renderOption ? renderOption(opt) : getLabel(opt)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};