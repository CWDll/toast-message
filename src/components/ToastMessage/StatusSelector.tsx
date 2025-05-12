import React from "react";
import styled from "styled-components";
import { ToastStatus } from "./index";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface StatusSelectorProps {
  selectedStatus: ToastStatus;
  onStatusChange: (status: ToastStatus) => void;
}

const statusOptions: {
  value: ToastStatus;
  label: string;
  icon: IconType;
}[] = [
  { value: "success", label: "성공", icon: FaCheckCircle },
  { value: "warning", label: "경고", icon: FaExclamationTriangle },
  { value: "error", label: "오류", icon: FaTimesCircle },
  { value: "default", label: "기본", icon: FaInfoCircle },
];

const StatusSelector: React.FC<StatusSelectorProps> = ({
  selectedStatus,
  onStatusChange,
}) => {
  return (
    <Container>
      {statusOptions.map(({ value, label, icon: Icon }) => (
        <StatusButton
          key={value}
          $isSelected={selectedStatus === value}
          onClick={() => onStatusChange(value)}
        >
          <span>{label}</span>
        </StatusButton>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const StatusButton = styled.button<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: ${({ $isSelected }) => ($isSelected ? "#f0f0f0" : "white")};
  cursor: pointer;
  transition: all 0 2s;

  &:hover {
    background: #f5f5f5;
  }

  svg {
    font-size: 1.1rem;
  }

  span {
    font-size: 0.9rem;
  }
`;

export default StatusSelector;
