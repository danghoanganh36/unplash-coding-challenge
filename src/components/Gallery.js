import React from "react";
import "./Components.css";
import Img1 from "../Saved Pictures/pexels-leeloo-thefirst-5238645.jpg";
import Img2 from "../Saved Pictures/pexels-shvets-production-7525029.jpg";
import Img3 from "../Saved Pictures/wallpaperflare.com_wallpaper.jpg";
import Img4 from "../Saved Pictures/pexels-leeloo-thefirst-5238645.jpg";

const Gallery = () => {
  let images = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
  ];

  return (
    <>
      <div className="gallery">
        {images.map((item, index) => {
          return (
            <div className="images" key={index}>
              <img src={item.imgSrc} style={{width: '100%'}} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
