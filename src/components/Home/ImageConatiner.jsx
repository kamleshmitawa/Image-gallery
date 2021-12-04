import React from "react";

export const ImageConatiner = ({ index, imageData, onImageClickHandler }) => {
  return (
    <div className="" onClick={(e) => onImageClickHandler(e, imageData)}>
      <div className="content">
        <div className="content-overlay"></div>
        <img alt="imgs" src={imageData.url} />
        <div className="centered">PIX {index + 1}</div>
        <div className="content-details fadeIn-bottom">
          <h5 className="content-title">{imageData.title}</h5>
        </div>
      </div>
    </div>
  );
};
