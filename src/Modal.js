import React from "react";
import './modal.css';

function Popup  ({ isOpen, close, item }) { 
    if (!isOpen) 
        return null;
    const onClose = () => {
        if (close)
            close();
    }
    return (
        <div className="popup">
            <div className="popup-content">
                <img src={item.images['Poster Art'].url} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>Año de lanzamiento: {item.releaseYear}</p>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );

};

export default Popup;