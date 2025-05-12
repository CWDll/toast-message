import React from "react";
import * as S from "./style";
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
    <S.Container>
      {statusOptions.map(({ value, label, icon: Icon }) => (
        <S.StatusButton
          key={value}
          $isSelected={selectedStatus === value}
          $value={value}
          onClick={() => onStatusChange(value)}
        >
          <span>{label}</span>
        </S.StatusButton>
      ))}
    </S.Container>
  );
};

export default StatusSelector;
