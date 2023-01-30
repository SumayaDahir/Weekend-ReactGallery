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
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <section>
        <GalleryList galleryList={galleryList} className="list" />
      </section>
    </div>
  );
}

export default App;


