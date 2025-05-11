import React, { useState } from "react";
import Header from "./components/Header";
import OptionBox from "./components/OptionBox";
import { Position } from "./types/toast";

function App() {
  const [position, setPosition] = useState<Position>("top-right");
  const [delay, setDelay] = useState<number>(3000);

  return (
    <div>
      <Header />
      <OptionBox
        position={position}
        setPosition={setPosition}
        delay={delay}
        setDelay={setDelay}
      />
    </div>
  );
}

export default App;
