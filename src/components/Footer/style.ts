import styled, { css } from "styled-components";

export const footer = styled.div `
    ${({ theme }) => css `
        background-color: ${theme.colors.gray100};
        width: 100vw;
        height: 34px;
        position: fixed;
        bottom: 0;
    `}
`;

export const text = styled.p`
    ${({ theme }) => css `
        color: ${theme.colors.black300};
        font-family: ${theme.constants.Montserrat};
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        text-align: center;
        line-height: 34px;
        margin: 0;
    `}
`;