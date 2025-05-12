import React, { useState, useEffect } from "react";
import * as S from "./style";

export default function Header() {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  // 메뉴 데이터
  const menuItems = [
    {
      title: "Tridge",
      dropdownItems: ["회사 소개", "비전", "팀", "연혁"],
    },
    {
      title: "서비스",
      dropdownItems: ["글로벌 거래", "시장 분석", "공급망 관리"],
    },
    {
      title: "지원자",
      dropdownItems: ["이창준", "lchj1999", "frontend-dev"],
    },
  ];

  // 외부 클릭 시 드롭다운 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openMenuIndex !== null) {
        const targetElement = event.target as Element;
        // 클릭한 요소가 NavItem이나 그 자식 요소가 아니면 메뉴 닫기
        if (!targetElement.closest(".nav-item")) {
          setOpenMenuIndex(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenuIndex]);

  const handleToggleMenu = (index: number) => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null);
    } else {
      setOpenMenuIndex(index);
    }
  };

  return (
    <S.HeaderContainer>
      <S.Logo>Toast Message App</S.Logo>
      <S.Nav>
        {menuItems.map((item, index) => (
          <S.NavItem
            key={index}
            onClick={() => handleToggleMenu(index)}
            className="nav-item"
          >
            {item.title}
            <S.DropdownMenu isOpen={openMenuIndex === index}>
              {item.dropdownItems.map((dropItem, i) => (
                <S.DropdownItem key={i}>{dropItem}</S.DropdownItem>
              ))}
            </S.DropdownMenu>
          </S.NavItem>
        ))}
      </S.Nav>
    </S.HeaderContainer>
  );
}
