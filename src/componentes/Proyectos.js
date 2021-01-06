import React, { useState } from "react";
//imgs
import calcJud from "../imgs/calcJud.png";
import MNDS from "../imgs/MNDS.png";
//componentes
import Img from "./Img";

export default function Proyectos() {
  //estado con % que se va a trasladar la img cuando se aprieten los btns
  const [x, setX] = useState(0);

  const imgs = [
    <Img
      src={calcJud}
      alt="proyecto-uno"
      href="https://calculadorajudicial.web.app"
    />,
    <Img src={MNDS} alt="proyecto-dos" href="https://valor-monedas.web.app" />,
  ];

  const anterior = () => {
    x === 0 ? setX(-100 * (imgs.length - 1)) : setX(x + 100);
  };

  const siguiente = () => {
    x === -100 * (imgs.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <section className="slider">
      {imgs.map((img, indice) => (
        <div
          className="slide-img"
          key={indice}
          style={{ transform: `translateX(${x}%)` }}
        >
          {img}
        </div>
      ))}
      <button onClick={anterior} className="btn-ant">
        <i className="fas fa-angle-left"></i>
      </button>
      <button onClick={siguiente} className="btn-sig">
        <i className="fas fa-angle-right"></i>
      </button>
    </section>
  );
}
