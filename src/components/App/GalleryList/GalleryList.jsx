import GalleryItem from "../GalleryItem/GalleryItem";

//created a GalleryList component that takes two props galleryList and className
function GalleryList({ galleryList, className }) {
    console.log(galleryList);
    return (
        // Using the map function to map through the gallerylist prop
        // assigned a unique id to the key in the GalleryItem component with a classname and item
        <div className={className}>
            {galleryList.map((item) => (
                <GalleryItem key={item.id} className="list-items" item={item} />
            ))}
        </div>
    );
  }
  
 //exporting the GalleryList component 
  export default GalleryList;