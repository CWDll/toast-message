import React, { useState } from "react";
import Header from "./components/Header";
import OptionBox from "./components/OptionBox";
import ToastButton from "./components/ToastButton";
import ToastMessage from "./components/ToastMessage";
import StatusSelector from "./components/ToastMessage/StatusSelector";
import { Position, positions } from "./types/toast";
import { ToastStatus } from "./components/ToastMessage";
import * as S from "./styles/AppStyle";
import styled from "styled-components";
import {
  ToastContainer,
  ClearAllButton,
} from "./components/ToastMessage/style";

type Toast = {
  id: number;
  message: string;
  position: Position;
  delay: number | null;
  status: ToastStatus;
};

function App() {
  const [position, setPosition] = useState<Position>("top-right");
  const [delay, setDelay] = useState<number>(3000);
  const [autoClose, setAutoClose] = useState<boolean>(true);
  const [toastMessages, setToastMessages] = useState<Toast[]>([]);
  const [input, setInput] = useState<string>("Toast Message");
  const [selectedStatus, setSelectedStatus] = useState<ToastStatus>("default");

  const showToastMessage = () => {
    if (!input.trim()) return;
    const toastDelay = autoClose ? delay : null;
    const newToast: Toast = {
      id: Date.now(),
      message: input,
      position,
      delay: toastDelay,
      status: selectedStatus,
    };
    setToastMessages((prev) => [...prev, newToast]);
    // 토스트 메시지 출력 후 입력 창 초기화
    // setInput("");
  };

  const handleToastClose = (id: number) => {
    setToastMessages((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleClearAll = (pos: Position) => {
    setToastMessages((prev) => prev.filter((toast) => toast.position !== pos));
  };

  // position별로 그룹핑
  const groupedToasts = positions.reduce((acc, pos) => {
    acc[pos] = toastMessages.filter((toast) => toast.position === pos);
    return acc;
  }, {} as Record<Position, Toast[]>);

  return (
    <div>
      <Header />
      <OptionBox
        position={position}
        setPosition={setPosition}
        delay={delay}
        setDelay={setDelay}
        autoClose={autoClose}
        setAutoClose={setAutoClose}
      />
      <S.ToastInputWrapper>
        <StatusSelector
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
        />
        <S.ToastInput
          type="text"
          placeholder="Toast 메시지를 입력하세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") showToastMessage();
          }}
        />
        <ToastButton onClick={showToastMessage} />
      </S.ToastInputWrapper>
      {positions.map((pos) =>
        groupedToasts[pos].length > 0 ? (
          <ToastContainer key={pos} $position={pos}>
            <ClearAllButton onClick={() => handleClearAll(pos)}>
              모두 지우기
            </ClearAllButton>
            {[...groupedToasts[pos]].reverse().map((toast) => (
              <ToastMessage
                key={toast.id}
                message={toast.message}
                delay={toast.delay}
                onClose={() => handleToastClose(toast.id)}
                status={toast.status}
              />
            ))}
          </ToastContainer>
        ) : null
      )}
    </div>
  );
}

export default App;
