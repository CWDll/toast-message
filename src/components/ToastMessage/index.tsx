import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { IconType } from "react-icons";

// Toast 상태 타입 정의
export type ToastStatus = "success" | "warning" | "error" | "default";

interface ToastMessageProps {
  message: string;
  delay: number | null;
  onClose: () => void;
  status: ToastStatus;
}

// 상태별 아이콘 매핑
const statusIcons: Record<ToastStatus, IconType> = {
  success: FaCheckCircle,
  warning: FaExclamationTriangle,
  error: FaTimesCircle,
  default: FaInfoCircle,
};

export default function ToastMessage({
  message,
  delay,
  onClose,
  status,
}: ToastMessageProps) {
  // 진행률 상태 (0-100%)
  const [percent, setPercent] = useState(0);
  // 마우스 호버 상태
  const [hovered, setHovered] = useState(false);

  // 지연 시간 저장 (null인 경우 0으로 처리)
  const delayRef = useRef(delay ?? 0);
  // 타이머 시작 시간
  const startTimeRef = useRef<number>(Date.now());
  // 일시정지 시작 시간
  const pauseTimeRef = useRef<number | null>(null);
  // 총 경과 시간 누적 저장 (일시정지 시간 포함)
  const elapsedRef = useRef<number>(0);
  // 프로그레스바 업데이트를 위한 interval 타이머
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  // 토스트 메시지 종료를 위한 timeout 타이머
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const IconComponent = statusIcons[status] as React.ElementType;
  const Icon = statusIcons[status] as React.ElementType;

  // 모든 타이머를 정리하는 유틸리티 함수
  const clearTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // 프로그레스바 진행률 업데이트 함수
  const updateProgress = () => {
    intervalRef.current = setInterval(() => {
      // 현재까지의 총 경과 시간 계산 (일시정지 시간 포함)
      const currentElapsed =
        Date.now() - startTimeRef.current + elapsedRef.current;
      // 진행률 계산 (최대 100%)
      const newPercent = Math.min(
        100,
        (currentElapsed / delayRef.current) * 100
      );
      setPercent(newPercent);
    }, 100); // 100ms마다 업데이트
  };

  // 타이머 시작 함수
  const start = (remain: number) => {
    startTimeRef.current = Date.now(); // 시작 시간 기록
    updateProgress(); // 프로그레스바 업데이트 시작
    timeoutRef.current = setTimeout(() => {
      clearTimers();
      onClose(); // 토스트 메시지 종료
    }, remain);
  };

  // 마운트 -> 타이머 시작
  useEffect(() => {
    if (delay === null) return;

    delayRef.current = delay;
    start(delay);

    // 컴포넌트 언마운트 -> 타이머 정리
    return () => clearTimers();
  }, []);

  // 마우스 호버 시작 시 호출
  const handleMouseEnter = () => {
    if (delay === null) return;
    setHovered(true);
    pauseTimeRef.current = Date.now(); // 일시정지 시작 시간 기록
    clearTimers(); // 타이머 정지

    // 누적 경과 시간 업데이트
    elapsedRef.current += Date.now() - startTimeRef.current;
  };

  // 마우스 호버 종료 시 호출
  const handleMouseLeave = () => {
    if (delay === null) return;
    setHovered(false);

    // 남은 시간 계산 후 타이머 재시작
    const remain = delayRef.current - elapsedRef.current;
    if (remain > 0) start(remain);
  };

  return (
    <S.ToastBox
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      $status={status}
    >
      <S.IconWrapper $status={status}>{Icon && <Icon />}</S.IconWrapper>
      <S.MessageText>{message}</S.MessageText>
      <S.CloseButton onClick={onClose}>×</S.CloseButton>
      {delay !== null && <S.ProgressBar $percent={percent} $status={status} />}
    </S.ToastBox>
  );
}
