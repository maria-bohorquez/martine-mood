import styled from "styled-components";
import { ReactComponent as ArrowSVG } from "./picker-arrow.svg";

export const ColorInput = styled.input`
  margin: 1px 12px;
  border-radius: 50%;
  width: 25px;
  height: 26px;
  border: 1px solid #e9fae3;
  background-color: #e9fae3;
  cursor: pointer;
  transition: 0.2s all linear;

  ::-webkit-color-swatch {
    border: 1px solid #000;
    border-radius: 100%;
  }
`;

export const Panel = styled.div`
  padding: 12px;
  border: 1px solid #e9fae3;
  box-shadow: -6px 6px 0px 0px #ffb703;
  backdrop-filter: blur(50px);

  z-index: 1;

  background: inherit;
  border-radius: 8px;

  display: flex;
  position: fixed;
  right: ${({ $isOpen }) => ($isOpen ? `0` : `-240px`)};
  transition: 0.3s;
  top: 50px;

  @media (max-width: 700px) {
    top: unset;
    bottom: 80px;
  }
`;

export const InputContainer = styled.div.attrs(({ $color }) => ({
  style: {
    color: `${$color}`
  }
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Arrow = styled(ArrowSVG).attrs(({ $color }) => ({
  style: {
    fill: `${$color}`
  }
}))`
  display: block;
  cursor: pointer;
  padding: 16px 16px;

  transform: ${({ $isOpen }) => ($isOpen ? `rotate(180deg)` : `unset`)};
  path {
    fill: inherit;
  }
`;
