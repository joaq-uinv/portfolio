import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
//componentes
import About from "../componentes/About";
import Contacto from "../componentes/Contacto";
import Tech from "../componentes/Tech";

export default function Info({ toggleModal, estaAbierto, ingles }) {
  if (!estaAbierto) return null;

  const techs = [
    {
      icono: <i className="fab fa-react fa-3x"></i>,
      nombre: "{ React }",
    },
    {
      icono: <i className="fab fa-js fa-3x"></i>,
      nombre: ".JavaScript( )",
    },
    {
      icono: <i className="fab fa-css3-alt fa-3x"></i>,
      nombre: ": CSS;",
    },
    {
      icono: <i className="fab fa-html5 fa-3x"></i>,
      nombre: "<HTML />",
    },
    {
      icono: (
        <span
          className="iconify fa-3x"
          data-icon="simple-icons:firebase"
          data-inline="false"
        ></span>
      ),
      nombre: "Firebase",
    },
    {
      icono: <i className="fab fa-git-alt fa-3x"></i>,
      nombre: "$ git",
    },
  ];

  return ReactDOM.createPortal(
    <>
      <section className="container-modal" />
      <CSSTransition
        in={estaAbierto}
        appear={true}
        timeout={600}
        classNames="fade"
      >
        <div className="container-modal-sec" style={{ color: "#eee" }}>
          <section className="info-ppal-modal">
            <About ingles={ingles} />
            <Contacto ingles={ingles} toggleModal={toggleModal} />
          </section>
          <section className="tecnologias-modal">
            {techs.map((tech, i) => (
              <Tech icono={tech.icono} nombre={tech.nombre} key={i} />
            ))}
          </section>
        </div>
      </CSSTransition>
    </>,
    document.querySelector("#portal")
  );
}
