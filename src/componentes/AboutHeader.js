import React from "react";

export default function AboutHeader({ ingles }) {
  return (
    <section className="txt-header-modal">
      <h2 style={{ marginBottom: "2px" }}>
        {!ingles ? "Sobre Mí" : "About me"}
      </h2>
      <h5 style={{ marginBottom: "10px" }}>
        {!ingles ? "Desarrollador Web Front-end" : "Front-end Web Developer"}
      </h5>
    </section>
  );
}
