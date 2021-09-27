import styled from "styled-components";
import { ReactComponent as LogoSVG } from "./lookatmycat.svg";
import { Marginals } from "../../styles";

export const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 270px;
  width: 100%;
`;

export const Header = styled.header`
  ${Marginals}
  justify-content: left;
  padding: 30px 30px 30px 280px;

  @media (max-width: 700px) {
    padding: 15px;
  }
`;
