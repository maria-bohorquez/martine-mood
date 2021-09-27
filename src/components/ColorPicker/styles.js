import styled from "styled-components";

export const ColorInput = styled.input`
  margin-left: 8px;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  border: 1px solid #000;
  cursor: pointer;

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
  right: 0;
  top: 50px;

  @media (max-width: 700px) {
    top: unset;
    bottom: 80px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
