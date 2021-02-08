import React from "react";

export default function Img({ src, alt, href }) {
  return (
    <div className="proyectos">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} className="calc-jud" />
      </a>
    </div>
  );
}
