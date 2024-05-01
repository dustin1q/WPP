import { useEffect, useRef } from "react";

function Modal({ openModal, closeModal, id, children }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog id={id}ref={ref}onCancel={closeModal}>
        <div className="modal">
            <div className="modalTop">
                <button onClick={closeModal}>X</button>
            </div>
            <div className="modalContent">
                {children}
            </div>
        </div>
    </dialog>
  );
}

export default Modal;