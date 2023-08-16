import React from "react";
import "./Blog.css";

const BlogComponent = ({ src, mainCaption, subCaption, large, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`image-link ${large ? "large" : ""}`}
    >
      <div className="image-container">
        <img src={src} alt="Blog Image" />
        <div className="caption">
          <p className="main-caption">{mainCaption}</p>
          <p className="sub-caption">{subCaption}</p>
        </div>
      </div>
    </a>
  );
};

export default BlogComponent;
