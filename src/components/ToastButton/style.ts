import styled from "styled-components";

export const ToastButtonWrapper = styled.div`
  position: fixed;
  left: 32px;
  bottom: 32px;
  z-index: 100;
`;

export const Button = styled.button`
  padding: 12px 32px;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 24px;
  transition: background 0.2s;
  &:hover {
    background: #444;
  }
`;
