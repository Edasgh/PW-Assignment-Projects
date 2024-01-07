import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import not_found_img from "../assets/not_found.png";

const SinglePhoto = () => {
  const [photo, setPhoto] = useState(null);
  const id = useParams();
  const getPhoto = async () => {
    try {
      const res = await fetch(
        `https://api.slingacademy.com/v1/sample-data/photos/${id.photoId.toString()}`
      );
      const data = await res.json();
      setPhoto(data.photo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id.photoId !== null) {
      getPhoto();
    } else {
      setPhoto(null);
    }
  }, []);

  return (
    <>
      {photo !== null ? (
        <>
          <div className="single-photo" key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <div className="info">
              <h2>{photo.title}</h2>
              <p className="desc">{photo.description}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="single-photo">
            <img src={not_found_img} alt="image_not_found" />
            <div className="info">
              <h2>Sorry! Image not found</h2>
              <p className="desc">404! an unknown error occurred</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SinglePhoto;
