
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    :root{
        --maxWidth: 1280px;
        --white: #fff;
        --black: #000;
        --darkBlue: #13141f;
        --deepBlue: #00bfff;
        --lightGray: #d3d1ca;
        --mediumGray: #353535;
        --darkGray: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMedium: 1.1rem;
        --fontSmall: 0.9rem;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body{
        font-family: "Roboto",san-serif;
        background-color: var(--darkBlue);

        h1{
            font-size: 2rem;
            color: var(--white);  
        }
        h3{
            font-size: 1.1rem;
            font-weight: 600;
        }
        p{
            font-size: 1rem;
            color: var(--white);
        }
    }
`;
