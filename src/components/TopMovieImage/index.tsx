import React from "react";

// Styles
import { Wrapper, Content, Text } from "./TopMovieImage.styles";

// Types
type Props = {
  image: string;
  title: string;
  text: string;
}

const TopMovieImage: React.FC<Props> = ({ image, title, text }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default TopMovieImage;
