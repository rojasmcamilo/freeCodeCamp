import React from "react";
import "../css/Testimonio.css"

function Testimonio(props) {
  return(
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio"
        src={require(`../img/test-${props.imagen}.jpg`)}
        alt="Foto de props.nombre"/>
      <div className="contenedor-text-testimonio">
        <p className="nombre-pais"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong> </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;