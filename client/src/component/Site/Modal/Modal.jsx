import React, { useState } from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          Kapat
        </button>
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/video-id"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default Modal