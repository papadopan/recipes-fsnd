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
    --color-yellow: ${(props) => props.theme.colors.yellow};
    --color-button: ${(props) => props.theme.colors.button};

    height:100%;
    width:100%;
    @media ${(props) => props.theme.mediaQueries.small}{
        font-size:140%;
    }

    
}


body {
    font-family: Open Sans,Helvetica Neue;
    font-weight: 400;
    height:100%;
    width:100%;
    background: var(--color-secondary)

}
`;
