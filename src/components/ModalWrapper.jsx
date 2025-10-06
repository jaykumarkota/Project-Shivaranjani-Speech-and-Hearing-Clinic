import { useState, useEffect } from "react";
import AppointmentForm from "./AppointmentForm";
import '../styles/components/ModalWrapper.css'

function ModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  // Open modal when page loads
  // useEffect(() => {
  //   setIsOpen(true);
  // }, []);

  const closeModal = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content ">
        <h2 className="form-title-popup">Get a quick consultation by filling the form</h2>
        <button className="modal-close" onClick={closeModal}>✖</button>
        <AppointmentForm />
      </div>
    </div>
  );
}

export default ModalWrapper;
