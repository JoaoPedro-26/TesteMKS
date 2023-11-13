import styled, { css } from "styled-components";

export const button = styled.button `
    ${({ theme }) => css `
        border-radius: 0px 0px 8px 8px;
        background-color: ${theme.colors.blue500};
        margin-top: auto;
        height: 31.91px;
        color: ${theme.colors.white100};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 0 14px;
    `}
`

export const image = styled.img`
    width: 12px;
    height: 13.5px;
`;