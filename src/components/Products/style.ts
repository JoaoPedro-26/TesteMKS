import styled, { css } from "styled-components";

export const container = styled.section `
    ${({ theme }) => css `
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        flex: 1 0 calc(100% - 16px);
        max-width: calc(100% - 16px);
        justify-content: center;
        align-items: center;
        margin-top: 10%;
    `}
`;