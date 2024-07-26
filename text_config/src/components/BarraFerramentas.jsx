/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BarraFerramentas = ({ inserirTexto }) => {
  return (
    <div className="toolbar">
      <button onClick={() => inserirTexto("# ", "")}>h1</button>
      <button onClick={() => inserirTexto("## ", "")}>h2</button>
      <button onClick={() => inserirTexto("**", "**")}>Bold</button>
      <button onClick={() => inserirTexto("*", "*")}>Italico</button>
      <button onClick={() => inserirTexto("[", "](https://")}>Link</button>
      <button onClick={() => inserirTexto("```", "```")}>Code Block</button>
      <button onClick={() => inserirTexto("-", "")}>List Item</button>
      <button onClick={() => inserirTexto("\n---\n", "")}>
        Horizontal Line
      </button>
    </div>
  );
};

export default BarraFerramentas;
