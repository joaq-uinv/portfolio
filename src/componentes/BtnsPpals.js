import React from "react";
import { Link } from "react-router-dom";

export default function LangBtn({ ingles, cambiarIdioma }) {
  return (
    <div className="container-btn">
      <Link to="/" className="btn-inicio">
        <i className="fas fa-home fa-3x"></i>
      </Link>
      <div className="btns-leng">
        <button
          onClick={cambiarIdioma}
          style={{
            background: !ingles ? "whitesmoke" : "grey",
            boxShadow: !ingles
              ? "4px 2px 0px -2px rgba(0, 0, 0, 0.75)"
              : " inset -1px 3px 7px -3px rgba(0,0,0,0.75)",
            transition: !ingles ? "none" : "all 0.3s ease",
            zIndex: !ingles ? "1" : "0",
          }}
        >
          ES
        </button>
        <button
          onClick={cambiarIdioma}
          style={{
            background: !ingles ? "grey" : "whitesmoke",
            boxShadow: !ingles
              ? " inset -1px 3px 7px -3px rgba(0,0,0,0.75)"
              : "-4px 2px 0px -2px rgba(0,0,0,0.75)",
            transition: !ingles ? "all 0.3s ease" : "none",
            zIndex: !ingles ? "0" : "1",
          }}
        >
          EN
        </button>
      </div>
    </div>
  );
}
