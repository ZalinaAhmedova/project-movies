import React from "react";
import "./modal.css";

function Modal({movie, status, toggleModal}) {
  
  return (
    <div className={`movieModal ${status ? 'active' : undefined}`}>
        <p className="modalClose" onClick={toggleModal}><ion-icon name="close-outline"></ion-icon></p>
      <iframe
        width="1000"
        height="600"
        src={movie.video}
        title={`${movie.title} | Official Trailer`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Modal;
