import './Modal.css'
import { VscError } from "react-icons/vsc";

const Modal = (props) => {

    const { children, isVisible, onClose } = props;
    if (!isVisible) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-container">
          <button className="modal-close" onClick={onClose}><VscError className='close__icon'/></button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;