import styled, { css } from "styled-components";

export const container = styled.div `
    ${({ theme }) => css `
        border-radius: 8px;
        background: ${theme.colors.white100};
        box-shadow: 0px 2px 8px 0px ${theme.colors.shadow100};
        width: 20%;
        height: 285px;
        display: flex;
        flex-direction: column
    `}
`;

export const image = styled.img.attrs((props) => ({
    src: props.src
}))`
    width: 60%;
    height: 138px;
    align-self: center;
    margin-top: 18px;
`;

export const textPrice = styled.div`
    ${({ theme }) => css `
        display: flex;
        justify-content: space-around;
        margin-top: 14px;
    `}
`;

export const text = styled.span`
    ${({ theme }) => css `
        font-family: ${theme.constants.Montserrat};
        font-weight: 400;
        font-size: 16px;
        color: ${theme.colors.black100};
    `}
`;

export const price = styled.span `
    ${({ theme }) => css `
        border-radius: 5px;
        background: ${theme.colors.black200};
        color: ${theme.colors.white100};
        font-family: ${theme.constants.Montserrat};
        font-size: 15px;
        font-weight: 700;
        width: 75px;
        height: 26px;
        line-height: 26px;
        text-align: center; 
    `}
`;

export const subText = styled.p`
    ${({ theme }) => css `
        color: ${theme.colors.black100};
        font-family: ${theme.constants.Montserrat};
        font-size: 10px;
        font-weight: 300;
        margin-top: 8px;
        text-align: center;
        padding-left: 14px;
        padding-right: 12px;
    `}
`;