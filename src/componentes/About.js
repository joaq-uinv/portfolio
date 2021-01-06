import React from "react";
import AboutHeader from "../componentes/AboutHeader";

export default function About({ ingles }) {
  return (
    <div className="about">
      <AboutHeader ingles={ingles} />
      <section className="presentacion" style={{ textAlign: "justify" }}>
        <p>
          {!ingles
            ? "Soy Joaquín Villanueva, un desarrollador web front-end autodidacta y estudiante de la Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional."
            : "I'm Joaquín Villanueva, a self-taught front-end web developer and a computer science student at the National Technological University."}
        </p>
        <p>
          {!ingles
            ? "Lo que más me atrae de este mundo es poder desarrollar aplicaciones web con interfaces intuitivas que nos ayuden a simplificar nuestras vidas."
            : "What I find most exciting about this world is being able to develop web applications with intuitive interfaces that help us make our lives simpler."}
        </p>
        <p>
          {!ingles
            ? "Si bien todavía tengo mucho por aprender, que es algo a lo que apunto, me considero un apasionado del desarrollo y web y de la programación en general. 😄"
            : "Despite having a lot more to learn, which is something I aim to, I consider myself a web development and programming enthusiast. 😄"}
        </p>
      </section>
    </div>
  );
}
