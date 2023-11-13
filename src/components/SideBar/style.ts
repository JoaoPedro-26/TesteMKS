import styled, { css } from 'styled-components';

export const sidebar = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
      position: fixed;
      top: 0;
      right: ${open ? '0' : '-486px'};
      width: 486px;
      height: 100%;
      background-color: ${theme.colors.blue500};
      transition: right 0.3s ease-in-out;
      z-index: 2;
      display: flex;
      flex-direction: column;
  `}
`;

export const header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 36px;
`;

export const closeButton = styled.img`
  ${({ theme }) => css`
    color: ${theme.colors.white100};
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 24px;
    margin-right: 16px;
    margin-left: auto;
  `}
`;

export const title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white100};
    font-family: ${theme.constants.Montserrat};
    font-size: 27px;
    font-weight: 700;
    margin-left: 47px;
  `}
`;

export const itemInfo = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 379px;
    height: 95px;
    border-radius: 8px;
    background: ${theme.colors.white100};
    box-shadow: -2px 2px 10px 0px ${theme.colors.shadow200};
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 22px;
  `}
`;

export const priceSideBar = styled.p`
  ${({ theme }) => css`
    font-weight: 700;
    color: ${theme.colors.black300};
    font-family: ${theme.constants.Montserrat};
    font-size: 14px;
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

export const closeImageSideBar = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
`

export const infosProducts = styled.div`
  padding-left: 47px;
`

export const totalPrice = styled.p`
    ${({ theme }) => css`
        font-size: 28px;
        font-weight: 700;
        color: ${theme.colors.white100};
        font-family: ${theme.constants.Montserrat};
        padding-left: 47px;
        position: absolute;
        margin-top: 870px
    `}
`

export const buttonPrice = styled.button`
     ${({ theme }) => css`
        font-family: ${theme.constants.Montserrat};
        font-weight: 700;
        font-size: 28px;
        color: ${theme.colors.white100};
        width: 100%;
        height: 97px;
        background-color: ${theme.colors.black300};
        margin-top: auto;
    `}
`;