import Square from "./Square";
import Input from "./Input";
import { useState } from "react";

function App() {
const [colorValue,setColorValue]=useState('');

  return (
    <div className="App">
      <header className="App-header">
        <Square
        colorValue={colorValue}/>
        <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        />
      </header>
    </div>
  );
}

export default App;
