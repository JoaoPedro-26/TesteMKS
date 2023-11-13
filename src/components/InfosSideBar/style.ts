import styled, { css } from 'styled-components';

export const itemInfo = styled.div`
  ${({ theme }) => css`
    width: 379px;
    height: 95px;
    border-radius: 8px;
    background: ${theme.colors.white100};
    box-shadow: -2px 2px 10px 0px ${theme.colors.shadow200};
  `}
`;

export const itemImage = styled.img`
  ${({ theme }) => css`
    width: 46px;
    height: 57px;
  `}
`;

export const itemLabel = styled.p`
  ${({ theme }) => css`
    font-size: 13px;
    font-weight: 400;
    color: ${theme.colors.black100};
    font-family: ${theme.constants.Montserrat};
  `}
`;

export const totalPrice = styled.p`
    ${({ theme }) => css`
        font-size: 28px;
        font-weight: 700;
        color: ${theme.colors.white100};
        font-family: ${theme.constants.Montserrat};
    `}
`