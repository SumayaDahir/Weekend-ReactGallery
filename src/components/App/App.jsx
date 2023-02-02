import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryList from "./GalleryList/GalleryList";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import PopularPlaces from "../PopularPlaces/PopularPlaces";

//create a function to fetchData from the serverside using the GET method
//update state with the response
function fetchData(setGalleryList) {
  axios
    .get("/gallery")
    .then((response) => {
      console.log(response.data);
      setGalleryList(response.data);
    })
    .catch((err) => {
      console.error("There was an error getting photos", err);
    });
}

//App component
//useEffect hook to fetch the data when the component is rendered
//use axios PUT request method to update the likes
//map over the previous gallery list
function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    fetchData(setGalleryList);
  }, []);

  // Function to handle the like button
  const handleLike = (id) => {
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        setGalleryList((prevGalleryList) =>
          prevGalleryList.map((item) => {
            //check if the current item's id matches the id passed in
            //if it does then increment the likes
            if (item.id === id) {
              item.likes += 1;
            }
            return item;
          })
        );
      })
      .catch((error) => {
        console.log(error);
        //catch errors
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <nav>
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
            </ul>
            <Router>
              <div>
                <ul>
                  <li>
                    <Link to="/">POPULAR PLACES</Link>
                  </li>
                </ul>
              </div>
              <Route path="/">
                <PopularPlaces />
              </Route>
            </Router>
          </nav>
          <div className="content">
            <h1> Travel Gallery</h1>
          </div>
        </div>
      </header>
      <GalleryList
        galleryList={galleryList}
        className="list"
        handleLike={handleLike}
      />
    </div>
    //galleryList component and pass in gallery list, classname and handlelike props
  );
}
//Added routes for practice *ignore it*
export default App;
