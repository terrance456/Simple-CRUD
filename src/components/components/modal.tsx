import ReactDOM from "react-dom";

interface Iprops {
  showModal: boolean;
}

const Modal: React.FC<Iprops> = (props) => {
  const modalContent: JSX.Element = (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">{props.children}</div>
    </div>
  );

  return props.showModal
    ? ReactDOM.createPortal(modalContent, document.body)
    : null;
};

export default Modal;
