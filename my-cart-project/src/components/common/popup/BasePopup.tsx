import { useState } from "react";
import { MdClose, MdCheckCircle, MdError } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import type { PopupProps } from "@/shared/types/popup";
export const BasePopup = ({type, state, title, content, onClose, onConfirm}:PopupProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose(); 
        }, 300);
    }
    const handleConfirmClick = () => {
      if (onConfirm) {
        onConfirm(); 
        // 뒤에 있는 onClose()를 실행하지 못하게 리턴
        return;
      }
        //   일반 실행
      setIsClosing(true);
      setTimeout(() => {
        onClose();
      }, 300);
    };

    return (
        <div className={`popupBg ${isClosing ? 'fade-out' : 'fade-in'}`}>
            <div className={`popupWrap ${type === 'alert' ? 'alert' : type === 'confirm' ? 'confirm' : 'modal'}`}>
                <div className={`popupHead ${state}`}>
                    <p className="closeBtn" onClick={handleClose}><MdClose/></p>
                    <span>{state === 'success' ? <MdCheckCircle/> : state === 'confirm' ? <BsFillQuestionCircleFill/> : <MdError/>}</span>
                    <h1>{title}</h1>
                </div>
                <div className="popupContent">{content}</div>
                <div className="popupButtons">
                    {type === 'confirm' && <button className="btn primary" onClick={handleClose}>취소</button>}
                    <button className="btn secondary" onClick={type === 'confirm' ? handleConfirmClick:handleClose}>확인</button>
                </div>
            </div>
        </div>
    )
}