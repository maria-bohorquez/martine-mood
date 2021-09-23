import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: #E9FAE3;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialised;
    background-color: #5D5F71;
    font-family: 'Syne', sans-serif;
  }
`;

export const Marginals = css`
  box-sizing: border-box;
  display: flex;
  pointer-events: none;
  position: fixed;
  z-position: 1;
  width: 100vw;
`;
