import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

//created a GalleryList component that takes three props galleryList, className, and handleLike
function GalleryList({ galleryList, className, handleLike }) {
    console.log(galleryList);
    return (
        // Using the map function to map through the gallerylist prop
        // assigned a unique id to the key in the GalleryItem component with a classname and item
        <div className={className}>
            {galleryList.map((item) => (
        <GalleryItem item={item} key={item.id} handleLike={handleLike} />
        ))}
        </div>
    );
  }
  
 //exporting the GalleryList component 
  export default GalleryList;