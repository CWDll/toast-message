import React from "react";
import * as S from "./style";
import { Position } from "../../types/toast";

interface OptionBoxProps {
  position: Position;
  setPosition: (pos: Position) => void;
  delay: number;
  setDelay: (delay: number) => void;
  autoClose: boolean;
  setAutoClose: (v: boolean) => void;
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
  autoClose,
  setAutoClose,
}: OptionBoxProps) {
  return (
    <S.OptionBoxContainer>
      <S.OptionGroup>
        <S.Label>Position</S.Label>
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
      </S.OptionGroup>
      <S.OptionGroup>
        <S.Label>Delay (ms)</S.Label>
        <S.DelayInput
          type="number"
          min={0}
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
          disabled={!autoClose}
        />
        <label style={{ marginTop: "8px" }}>
          <input
            type="checkbox"
            checked={!autoClose}
            onChange={() => setAutoClose(!autoClose)}
          />
          autoClose 비활성화
        </label>
      </S.OptionGroup>
    </S.OptionBoxContainer>
  );
}
