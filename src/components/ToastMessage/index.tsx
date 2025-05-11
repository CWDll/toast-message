import React, { useEffect, useRef, useState } from "react";
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
  const [percent, setPercent] = useState(0);
  const startTimeRef = useRef(Date.now());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (delay === null) return;
    startTimeRef.current = Date.now();

    const update = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const newPercent = Math.min(100, (elapsed / delay) * 100);
      setPercent(newPercent);
      if (newPercent < 100) {
        timerRef.current = setTimeout(update, 100);
      }
    };
    update();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (delay !== null) {
      const timer = setTimeout(onClose, delay);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <S.ToastBox>
      {message}
      <S.CloseButton onClick={onClose}>×</S.CloseButton>
      {delay !== null && <S.ProgressBar percent={percent} />}
    </S.ToastBox>
  );
}
