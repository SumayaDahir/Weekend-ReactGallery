import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, className }) {
    console.log(galleryList);
    return (
        <div className={className}>
            {galleryList.map((item) => (
                <GalleryItem key={item.id} className="list-items" item={item} />
            ))}
        </div>
    );
  }
  
  
  export default GalleryList;