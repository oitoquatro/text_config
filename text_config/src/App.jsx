import { useState, useEffect, useRef } from "react";
import { marked } from "marked";

import BarraFerramentas from "./components/BarraFerramentas";

function App() {
  const [text, setText] = useState(
    localStorage.getItem("markdownText") || "#Hello word!!!"
  );

  //função responsável por transformar em html.
  const renderText = () => {
    return { __html: marked(text) };
  };

  const textAreaRef = useRef(null);

  //salvando conteudo no localstorage
  useEffect(() => {
    localStorage.setItem("markdownText", text);
  }, [text]);

  const inserirTexto = (antes, depois) => {
    const textArea = textAreaRef.current;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const textoAnterior = textArea.value;
    const antesText = textoAnterior.substring(0, start);
    const textoSelecionado = textoAnterior.substring(start, end);
    const depoisText = textoAnterior.substring(end);

    const newText = `${antesText}${antes}${textoSelecionado}${depois}${depoisText}`;

    setText(newText)

    textArea.focus()
  };

  return (
    <div className="app-container">
      <BarraFerramentas inserirTexto={inserirTexto} />
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div dangerouslySetInnerHTML={renderText()} />
    </div>
  );
}

export default App;
