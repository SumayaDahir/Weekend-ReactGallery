import React from "react";
import { useState } from "react";
import './GalleryItem.css';

//Gallery Item component
//Use state to keep track of whether the description is being shown or not
//Use state to keep track of the number of likes for each photo
function GalleryItem({ item, className, handleLike }) {
  const [showDescription, setShowDescription] = useState(false);
  const [likes, setLikes] = useState(item.likes);

//handle click to handle the number of likes when the Love button is clicked
//increase likes by 1
//call the handlelike function with current item's id
//in the return I added conditional render to toggle the display between the photo and description 
  const handleClick = () => {
    setLikes(likes + 1);
    handleLike(item.id);
  }


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
      <button onClick={handleClick}>LOVE</button>
      <p> {item.likes} People love this </p>
    </div>
  );
}
//item.likes will display the number of likes
export default GalleryItem;
