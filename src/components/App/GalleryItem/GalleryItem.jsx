import React from "react";
import { useState } from "react";

function GalleryItem({ item, className }) {
  const [showDescription, setShowDescription] = useState(false);
  const [likes, setLikes] = useState(0);

  return (
    <div className={className}>
      <div style={{ display: showDescription ? "none" : "invisable" }}>
        <img
          src={item.path}
          onClick={() => setShowDescription(!showDescription)}
        />
      </div>
      <div style={{ display: showDescription ? "invisable" : "none" }}>
        <p>{item.description}</p>
      </div>
      <button onClick={() => setLikes(likes + 1)}>LOVE!</button>
      <p> {likes} People love this</p>
    </div>
  );
}

export default GalleryItem;