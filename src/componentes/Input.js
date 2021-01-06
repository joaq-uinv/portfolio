import React from "react";

export default function Input({
  tipoInput,
  nombreInput,
  paraLabel,
  contenidoSpan,
  contenidoSpanIngles,
  ingles,
  valorInput,
  onChange,
}) {
  return (
    <div className="container-input">
      <input
        type={tipoInput}
        name={nombreInput}
        value={valorInput}
        onChange={onChange}
        required
      />
      <label className="nom-label" htmlFor={paraLabel}>
        <span className="contenido">
          {!ingles ? contenidoSpan : contenidoSpanIngles}
        </span>
      </label>
    </div>
  );
}
