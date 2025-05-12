import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 12px 20px;
  background: #fff;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 100;
`;

export const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: #00a760;
  letter-spacing: 0.5px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: static;
`;

export const NavItem = styled.div`
  margin-left: 20px;
  font-size: 0.9rem;
  color: #666;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #00a760;
  }

  &:after {
    content: "▼";
    font-size: 0.6rem;
    margin-left: 5px;
  }
`;

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%)
    translateY(${(props) => (props.isOpen ? "0" : "-10px")});
  background: #fff;
  min-width: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px 0;
  z-index: 200;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.2s, visibility 0.2s, transform 0.2s;
`;

export const DropdownItem = styled.div`
  padding: 8px 16px;
  color: #666;
  font-size: 0.9rem;

  &:hover {
    background: #f5f5f5;
    color: #00a760;
  }
`;
