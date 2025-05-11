import styled from "styled-components";

export const OptionBoxContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 24px;
  background: #f7f7f7;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  width: 350px;
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.span`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const DelayInput = styled.input`
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  width: 40%;
`;
