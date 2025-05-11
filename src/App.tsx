import React, { useState } from "react";
import Header from "./components/Header";
import OptionBox from "./components/OptionBox";
import ToastButton from "./components/ToastButton";
import { Position } from "./types/toast";

function App() {
  const [position, setPosition] = useState<Position>("top-right");
  const [delay, setDelay] = useState<number>(3000);

  const handleToastButtonClick = () => {
    console.log("position:", position);
    console.log("delay:", delay);
  };

  return (
    <div>
      <Header />
      <OptionBox
        position={position}
        setPosition={setPosition}
        delay={delay}
        setDelay={setDelay}
      />
      <ToastButton onClick={handleToastButtonClick} />
    </div>
  );
}

export default App;
