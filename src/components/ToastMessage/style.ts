import styled, { css } from "styled-components";
import { Position } from "../../types/toast";
import { ToastStatus } from "./index";

const positionStyles = {
  "top-left": css`
    top: 32px;
    left: 32px;
    align-items: flex-start;
  `,
  "top-center": css`
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
  `,
  "top-right": css`
    top: 32px;
    right: 32px;
    align-items: flex-end;
  `,
  "bottom-left": css`
    bottom: 32px;
    left: 32px;
    align-items: flex-start;
  `,
  "bottom-center": css`
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
  `,
  "bottom-right": css`
    bottom: 32px;
    right: 32px;
    align-items: flex-end;
  `,
};

// 상태별 색상 정의
const statusColors = {
  success: {
    background: "#e8f5e9",
    text: "#2e7d32",
    progress: "#4caf50",
    icon: "#2e7d32",
  },
  warning: {
    background: "#fff3e0",
    text: "#ef6c00",
    progress: "#ff9800",
    icon: "#ef6c00",
  },
  error: {
    background: "#ffebee",
    text: "#c62828",
    progress: "#f44336",
    icon: "#c62828",
  },
  default: {
    background: "#f5f5f5",
    text: "#424242",
    progress: "#757575",
    icon: "#757575",
  },
};

export const ToastContainer = styled.div<{ $position: Position }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 40px;
  margin-top: 50px;
  z-index: 9999;
  ${({ $position }) => positionStyles[$position]}
`;

export const ToastBox = styled.div<{ $status: ToastStatus }>`
  position: relative;
  padding: 12px 24px;
  border-radius: 8px;
  color: ${({ $status }) => statusColors[$status].text};
  background-color: ${({ $status }) => statusColors[$status].background};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  min-width: 200px;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
`;

export const IconWrapper = styled.div<{ $status: ToastStatus }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $status }) => statusColors[$status].icon};
  font-size: 1.2rem;
  flex-shrink: 0;
`;

export const MessageText = styled.div`
  flex: 1;
  font-size: 0.9rem;
  line-height: 1.4;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 20px;
  cursor: pointer;
  padding: 0 0 0 12px;
  opacity: 0.7;
  transition: opacity 0.2s;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
  }
`;

export const ProgressBar = styled.div<{
  $percent: number;
  $status: ToastStatus;
}>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: ${({ $status }) => statusColors[$status].progress};
  width: ${({ $percent }) => $percent}%;
  transition: width 0.1s linear;
  border-radius: 0 0 8px 8px;
`;

export const ToastMessageContainer = styled(ToastContainer)``;

export const ClearAllButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: #444;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 0.9rem;
  cursor: pointer;
  z-index: 10;
  opacity: 0.8;
  transition: background 0.2s;
  &:hover {
    background: #e53935;
    color: #fff;
    opacity: 1;
  }
`;
