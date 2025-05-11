import React from "react";
import { OptionBoxContainer, OptionGroup, Label, DelayInput } from "./style";
import { Position } from "../../types/toast";

interface OptionBoxProps {
  position: Position;
  setPosition: (pos: Position) => void;
  delay: number;
  setDelay: (delay: number) => void;
}

const positions: Position[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

export default function OptionBox({
  position,
  setPosition,
  delay,
  setDelay,
}: OptionBoxProps) {
  return (
    <OptionBoxContainer>
      <OptionGroup>
        <Label>Position</Label>
        {positions.map((pos) => (
          <label key={pos}>
            <input
              type="radio"
              name="position"
              value={pos}
              checked={position === pos}
              onChange={() => setPosition(pos)}
            />
            {pos}
          </label>
        ))}
      </OptionGroup>
      <OptionGroup>
        <Label>Delay (ms)</Label>
        <DelayInput
          type="number"
          min={0}
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </OptionGroup>
    </OptionBoxContainer>
  );
}
