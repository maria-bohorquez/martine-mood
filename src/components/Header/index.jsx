import React from "react";
import { Logo, Header } from "./styles";

const HeaderComponent = ({ textColor }) => (
  <Header>
    <Logo title="Look at my cat logo" $color={textColor} />
  </Header>
);

export default HeaderComponent;
