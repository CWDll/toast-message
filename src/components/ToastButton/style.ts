import styled from "styled-components";

export const ToastButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled.button`
  padding: 12px 32px;
  width: 100%;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s;
  &:hover {
    background: #444;
  }
`;
