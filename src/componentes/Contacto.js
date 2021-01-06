import { React, useState } from "react";
import Input from "../componentes/Input";
import dbFirebase from "../firebase";

export default function Contacto({ ingles, cerrarModal }) {
  const [inputs, setInputs] = useState({ nombre: "", mail: "", msj: "" });

  const datosInputs = [
    {
      tipoInput: "text",
      nombreInput: "nombre",
      valorInput: inputs.nombre,
      paraLabel: "nombre",
      contenidoSpan: "Nombre",
      contenidoSpanIngles: "Name",
    },
    {
      tipoInput: "email",
      nombreInput: "mail",
      valorInput: inputs.mail,
      paraLabel: "mail",
      contenidoSpan: "Email",
      contenidoSpanIngles: "Email",
    },
  ];

  const onChange = (e) => {
    //sp op p/actualizar valor del estado con lo escrito en input
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dbFirebase.child("msjs").push(inputs);
    setInputs({ nombre: "", mail: "", msj: "" });
  };

  return (
    <div className="container-contacto">
      <header className="header-contacto">
        <h2>{!ingles ? "¡Charlemos!" : "Let's talk!"}</h2>
        <button className="btn-cerrar-modal" onClick={cerrarModal}>
          <i className="fas fa-times"></i>
        </button>
      </header>
      <form className="form-contacto" onSubmit={onSubmit}>
        {datosInputs.map((input, i) => (
          <Input
            tipoInput={input.tipoInput}
            nombreInput={input.nombreInput}
            valorInput={input.valorInput}
            paraLabel={input.paraLabel}
            contenidoSpan={input.contenidoSpan}
            contenidoSpanIngles={input.contenidoSpanIngles}
            ingles={ingles}
            onChange={onChange}
            key={i}
          />
        ))}
        <section className="textarea">
          <textarea
            name="msj"
            value={inputs.msj}
            onChange={onChange}
            required
          />
          <label htmlFor="msj" className="nom-label">
            <span className="contenido">{!ingles ? "Mensaje" : "Message"}</span>
          </label>
        </section>
        <button type="submit">
          {!ingles ? "Enviar mensaje" : "Send message"}
        </button>
      </form>
    </div>
  );
}
