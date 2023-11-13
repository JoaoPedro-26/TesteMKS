import styled, { css } from "styled-components";

export const container = styled.main `
    ${({ theme }) => css `
        width: 100vw;
        heigth: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `}
`