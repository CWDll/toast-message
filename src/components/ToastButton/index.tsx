import React from "react";
import * as S from "./style";

interface ToastButtonProps {
  onClick: () => void;
}

export default function ToastButton({ onClick }: ToastButtonProps) {
  return (
    <S.ToastButtonWrapper>
      <S.Button onClick={onClick}>Toast Button</S.Button>
    </S.ToastButtonWrapper>
  );
}
