import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content, MTRLogoImg } from "./Header.styles";

import MTRLogo from "../../assets/img/movies-to-react.png"

const Header:React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
        <MTRLogoImg src={MTRLogo} alt="mtr-logo" />
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Header;
