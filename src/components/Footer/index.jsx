import React from "react";
import { Footer, H2, H2Middle } from "./styles";

const FooterComponent = ({ textColor }) => (
  <Footer $color={textColor}>
    <H2>Look at it.</H2>
    <H2Middle> Look at my cat.</H2Middle>
    <H2>Look at it.</H2>
  </Footer>
);

export default FooterComponent;
