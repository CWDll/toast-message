import styled, { css } from "styled-components";
import { Position } from "../../types/toast";

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

export const ToastContainer = styled.div<{ position: Position }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 9999;
  ${({ position }) => positionStyles[position]}
`;

export const ToastBox = styled.div`
  min-width: 240px;
  max-width: 400px;
  background: #222;
  color: #fff;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  animation: fadeIn 0.3s;
  position: relative;

  // 생성 애니메이션
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 12px;
`;

export const ToastMessageContainer = styled(ToastContainer)``;
