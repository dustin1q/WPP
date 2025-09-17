import { useEffect, useRef } from "react";

function Modal({ openModal, closeModal, id, children, title }) {
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
               <h3>{title}</h3> <button onClick={closeModal}>X</button>
            </div>
            <div className="modalContent">
                {children}
            </div>
        </div>
    </dialog>
  );
}

export default Modal;