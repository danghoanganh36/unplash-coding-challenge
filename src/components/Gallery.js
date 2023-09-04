import React, { useState, useEffect } from "react";
import "./Components.css";
import CloseIcon from '@mui/icons-material/Close';
import { useParams } from "react-router-dom";

const Gallery = () => {

  const [images, setImages] = useState([]);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [model, setModel] = useState(false);
  const { topic } = useParams();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${topic}&client_id=wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg`);

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const data = await response.json();
        setImages(data.results);
      } catch (error) {
        console.error(error.message);
        setModel(false);
      }
    };
    fetchImages(); 
  }, [topic]);

  const getImage = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {images.map((item) => {
          return (
            <div className="images" onClick={() => getImage(item.urls.regular)}>
              <img src={item.urls.regular} style={{ width: '100%' }} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
