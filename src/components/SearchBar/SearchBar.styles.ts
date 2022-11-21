import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px 30px;
  height: 60px;
  background: var(--darkBlue);
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 45%;
    height: 30px;
    border-radius: 5px;
    color: var(--white);

    svg{
        position: absolute;
        left: 9px;
        top: 15px;
        width: 25px;
        color: var(--deepBlue);

        @media screen and (max-width: 500px){
            left: 3px;
        }
    }

    input{
        font-size: var(--fontMedium);
        margin: 3px 0;
        padding: 0 0 0 50px;
        width: 95%;
        height: 40px;
        border: 1px solid var(--deepBlue);
        border-radius: 10px;
        color: var(--black);

        @media screen and (max-width: 500px){
            font-size: var(--fontSmall);
            padding: 0 0 0 30px;
        }

        :focus{
            outline: none;
        }
    }
`;