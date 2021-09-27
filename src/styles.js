import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @keyframes glow{
    0% {
      box-shadow: rgb(252, 163, 17) 0 0 0px;
    }
    100% {
      box-shadow: rgb(252, 163, 17) 0 10px 100px;
    }
  }
  body {
    color: #E9FAE3;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialised;
    font-family: 'Syne', sans-serif;
  }
`;

export const Marginals = css`
  box-sizing: border-box;
  display: flex;
  pointer-events: none;
  position: fixed;
  z-index: 1;
  width: 100vw;
`;

export const ImageContainer = styled.div.attrs(({ $isTogether }) => ({
  style: {
    animation: $isTogether ? "glow 3s infinite alternate" : "none"
  }
}))`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 600px;
  width: 400px;
`;

export const Wrapper = styled.section.attrs(({ $color }) => ({
  style: {
    //backgroundColor: `hsl(${$color}, 79%, 53%)`
    backgroundColor: `${$color}`
  }
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
