import styled from "styled-components";

export const ToastInputWrapper = styled.div`
  position: fixed;
  left: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  z-index: 1000;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ToastInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #666;
  }
`;
