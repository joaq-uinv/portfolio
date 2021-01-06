import React from "react";

export default function Tech({ icono, nombre }) {
  return (
    <div className="tech">
      <p className="icono-tech">{icono}</p>
      <p className="nombre-tech" style={{ color: "#eee" }}>
        {nombre}
      </p>
    </div>
  );
}
