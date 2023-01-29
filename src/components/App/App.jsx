import React, {useState, useEffect} from "react";
import axios from "axios";
import GalleryItem from "./GalleryItem/GalleryItem";
import GalleryList from "./GalleryList/GalleryList";
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList/>
        <GalleryItem/>
      </div>
    );
}

export default App;

