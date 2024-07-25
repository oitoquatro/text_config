import { useState, useEffect, useRef } from "react";
import BarraFerramentas from "./components/BarraFerramentas";

function App() {
  return (
    <div className="app-container">
      <BarraFerramentas />
      <textarea></textarea>
    </div>
  );
}

export default App;
