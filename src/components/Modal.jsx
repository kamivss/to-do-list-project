import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

const Modal = forwardRef(function Modal({ children }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open() {
            if (dialog.current) {
                dialog.current.showModal();
            }
        }
    }));

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button button='fechar'></Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default Modal;
