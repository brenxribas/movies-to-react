import React from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from 'react-icons/bs';

// Styles
import { Wrapper, Content } from "./BreadCrump.styles";

// Types
type Props = {
  movieTitle: string;
}

const BreadCrump: React.FC<Props> = ({ movieTitle }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Content>
          <Link to="/">
            <span>Início</span>
          </Link>
          <BsChevronRight/>
          <span>{movieTitle}</span>
        </Content>
      </Wrapper>
    </React.Fragment>
  );
};

export default BreadCrump;
