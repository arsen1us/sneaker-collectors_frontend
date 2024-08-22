import React, { useEffect } from "react";
import '../css/Popup.css'

function Popup({ show, handleClose, children }) {

    // Закрытие при клике вне окна
    const handleClickOutSide = (e) => {
        if(e.target.classList.contains("popup"))
            handleClose();
    }

    // Закрытие при нажатии клавиши ESC
    useEffect(() => {
        const closeOnEscapeKey = (e) => {
            if(e.key == "Escape" && show) {
                handleClose();
            }
        } 
        document.body.addEventListener("keydown", closeOnEscapeKey);
        // return () => {
        //     document.body.removeEventListener("keydown", closeOnEscapeKey);
        // };
    }, [show, handleClose]);


    // Закрытие при нажатии крестика
    const showHideClass = show ? "popup display-block" : "popup display-none";

    return (
        <div class={showHideClass} onClick={handleClickOutSide}>
            <div class="popup-main">
                {children}
                <button class="close-button" onClick={handleClose}>
                    X
                </button>
            </div>
        </div>
    );
}

export default Popup;