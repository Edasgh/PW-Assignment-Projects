import React, { useEffect, useState } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const res = await fetch(
        "https://api.slingacademy.com/v1/sample-data/photos?limit=20"
      );
      const data = await res.json();
      setPhotos(data.photos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <>
      <div className="photos-container">
        {photos.length !== 0 ? (
          photos.map((photo) => (
            <a href={`/single-photo/${photo.id}`} key={photo.id}>
              <img
                src={photo.url}
                alt={photo.title}
                className="photos-container-photo"
              />
            </a>
          ))
        ) : (
          <>
            <p>No photo found</p>
          </>
        )}
      </div>
    </>
  );
};

export default Photos;
