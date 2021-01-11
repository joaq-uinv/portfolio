import { React, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Icono from "../imgs/icono.jpg";
import Info from "../componentes/Info";

export default function Home({ ingles }) {
  const [estaAbierto, setestaAbierto] = useState(false);

  const toggleModal = () => {
    setestaAbierto(!estaAbierto);
  };

  return (
    <section className="home">
      <div className="info">
        <img src={Icono} alt="icono" />
        <h3>Joaquín Villanueva</h3>
        <p>
          {!ingles ? "Desarrollador Web Front-end" : "Front-end Web Developer"}
        </p>
      </div>
      <ul className="iconos-info">
        <li>
          <Link
            to="proyectos"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <i className="fas fa-laptop-code fa-3x"></i>
          </Link>
        </li>
        <li>
          <i className="fas fa-user fa-3x" onClick={toggleModal}></i>
          <CSSTransition
            in={estaAbierto}
            appear={true}
            timeout={600}
            classNames="fade"
            unmountOnExit
          >
            <Info
              estaAbierto={estaAbierto}
              toggleModal={toggleModal}
              ingles={ingles}
            />
          </CSSTransition>
        </li>
      </ul>
    </section>
  );
}
