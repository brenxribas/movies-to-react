import styled from "styled-components";
import { IMAGE_URL, BACKDROP_SIZE } from "../../config/config";

// Types
type Props = {
  backdrop: string;
}

export const Wrapper = styled.div<Props>`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;
  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(19, 20, 31, 0.9);
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 40px;
  color: var(--white);
  overflow: hidden;

  .info {
    display: flex;
    justify-content: flex-start;
    padding: 30px 0px;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: var(--deepBlue);
    color: var(--black);
    font-weight: 800;
    border-radius: 50%;
    margin-left: 25px;
  }

  .time{
    margin-left: 20px;
  }

  .runtime{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
    margin-top: 5px;
    p {
      margin: 0;
      padding: 5px 0px;
    }
  }

  .director {
    margin: 0 0 0 30px;
    p {
      margin: 0;
      padding: 5px 0px;
    }
  }

  h1 {
      color: var(--deepBlue);
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
  
  h3 {
    padding-top: 20px;
    padding-bottom: 10px;
  }
`;
