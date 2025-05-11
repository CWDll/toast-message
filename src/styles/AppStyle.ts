import styled from "styled-components";

export const ToastInputWrapper = styled.div`
  position: fixed;
  left: 12%;
  bottom: 32px;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ToastInput = styled.input`
  padding: 10px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 200px;
`;
