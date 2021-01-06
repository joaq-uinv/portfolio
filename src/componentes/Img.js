import React from "react";

export default function Img({ src, alt, href }) {
  return (
    <div className="proyectos">
      <a href={href}>
        <img src={src} alt={alt} className="calc-jud" />
      </a>
    </div>
  );
}
