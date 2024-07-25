import { useState, useEffect, useRef } from "react";
import { marked } from "marked";

import BarraFerramentas from "./components/BarraFerramentas";

function App() {
  const [text, setText] = useState("###Hello word!!!");

  //função responsável por transformar em html.
  const renderText = () => {
    return { __html: marked(text) };
  };

  const textAreaRef = useRef(null);

  return (
    <div className="app-container">
      <BarraFerramentas />
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
