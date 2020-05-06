import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::before,
*::after{
    margin:0;
    padding:0;
    box-sizing:inherit
}

html{
    font-size: 100%;
    box-sizing: border-box;
    --color-main: ${(props) => props.theme.colors.main};
    --color-secondary: ${(props) => props.theme.colors.secondary};
    --color-white: ${(props) => props.theme.colors.white};
    --color-grey: ${(props) => props.theme.colors.grey};
    --color-black: ${(props) => props.theme.colors.black};
    --color-error: ${(props) => props.theme.colors.error};
    --color-warning: ${(props) => props.theme.colors.warning};


    @media ${(props) => props.theme.mediaQueries.small}{
        font-size:140%;
    }
}


body {
    font-family: Helvetica;
    font-weight: 400;
}
`;
