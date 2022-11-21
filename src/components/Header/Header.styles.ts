import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--darkBlue);
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;

export const MTRLogoImg = styled.img`
    width: 350px;
    @media screen and (max-width: 500px){
        width: 300px;
    }
`;

