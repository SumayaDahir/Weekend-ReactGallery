import React from "react";
import { useState } from "react";
import './GalleryItem.css';

function GalleryItem({ item, className, handleLike }) {
  const [showDescription, setShowDescription] = useState(false);
  const [likes, setLikes] = useState(0);

  return (
    <div className={className}>
      
      <div style={{ display: showDescription ? "none" : "block" }}>
      <div className="images-container">
        <img
          src={item.path}
          onClick={() => setShowDescription(!showDescription)}
        />
        </div>
      </div>
      <div style={{ display: showDescription ? 'block' : 'none' }}>
        <p>{item.description}</p>
      </div>
      <button onClick={() => {
        setLikes(likes + 1); handleLike(item.id); }}>LOVE</button>
      <p> {likes} People love this</p>
    </div>
  );
}

export default GalleryItem;
