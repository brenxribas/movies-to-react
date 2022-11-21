import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--deepBlue);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 10px;
  color: var(--white);
  border: 0;
  font-size: var(--fontMedium);
  font-family: Roboto, "sans-serif";
  margin: 20px auto;
  transform: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
