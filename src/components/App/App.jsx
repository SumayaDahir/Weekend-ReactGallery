import React, {useState, useEffect} from "react";
import axios from "axios";
import GalleryList from "./GalleryList/GalleryList";
import './App.css';

function fetchData(setGalleryList) {
  axios
    .get("/gallery")``
    .then((response) => {
      console.log(response.data)
      setGalleryList(response.data);
    })
    .catch((err) => {
      console.error("There was an error getting photos", err);
    });
}
function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    fetchData(setGalleryList);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
        <nav>
    <ul>
  <li><a href="#">HOME</a></li>
  <li><a href="#">POPULAR PLACES</a></li>
  <li><a href="#">CONTACT US</a></li>
    </ul>
    </nav>
    <div className="content">
    <h1>  Travel Gallery</h1>
    </div>
        
    </div>
  </header>
        <GalleryList galleryList={galleryList} className="list" />
     </div>
  
  );
}

export default App;