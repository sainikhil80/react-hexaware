import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  function getPhotos() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => setPhotos(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div>
      <h1 className="text-center">All Photos</h1>
      <div class="row">
        {photos.map((photo) => (
          <Photo data={photo} />
        ))}
      </div>
    </div>
  );
};
export default Photos;
