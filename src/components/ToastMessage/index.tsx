import React, { useEffect } from "react";
import * as S from "./style";

interface ToastMessageProps {
  message: string;
  delay: number | null;
  onClose: () => void;
}

export default function ToastMessage({
  message,
  delay,
  onClose,
}: ToastMessageProps) {
  useEffect(() => {
    if (delay !== null) {
      const timer = setTimeout(onClose, delay);
      return () => clearTimeout(timer);
    }
  }, [delay, onClose]);

  return (
    <S.ToastBox>
      {message}
      <S.CloseButton onClick={onClose}>×</S.CloseButton>
    </S.ToastBox>
  );
}
