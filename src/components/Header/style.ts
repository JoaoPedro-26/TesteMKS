import styled, { css } from "styled-components";

export const header = styled.header `
    ${({ theme }) => css `
        background-color: ${theme.colors.blue500};
        width: 100vw;
        height: 101px;
        display: flex;
        align-items: center; 
        justify-content: space-between; 
        padding: 0 65px; 
    `}
`

export const containerHeader = styled.div`
    display: flex;
    align-items: center;
`

export const logo = styled.p `
    ${({ theme }) => css `
        color: ${theme.colors.white100};
        font-family: ${theme.constants.Montserrat};
        font-size: 40px;
        font-weight: 600;
    `}
`

export const text = styled.p `
    ${({ theme }) => css `
        color: ${theme.colors.white100};
        font-family: ${theme.constants.Montserrat};
        font-size: 20px;
        font-weight: 300;
        margin-top: 6px;
        margin-left: 8px;
    `}
`;

export const image = styled.img `
    width: 19.008px;
    height: 18px;
`

export const button = styled.button `
    ${({ theme }) => css `
        background-color: ${theme.colors.white100};
        border-radius: 8px;
        font-size: 18px;
        font-family: ${theme.constants.Montserrat};
        font-weight: 700;
        color: ${theme.colors.black300};
        margin-left: auto;
        width: 90px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 21px;
    `}
`;