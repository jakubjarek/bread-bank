import styled from 'styled-components';

export const Wrapper = styled.button`
  position: relative;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  & svg {
    width: 22px;
    height: 22px;
  }

  &:first-of-type {
    margin-right: 6px;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.black};
  }

  &:hover svg,
  &:focus svg {
    filter: invert(1); //
  }
`;

export const NotificationNumber = styled.span`
  position: absolute;
  width: 18px;
  height: 18px;
  line-height: 16px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.white};
  font-weight: bold;
  font-size: 12px;
  top: -2px;
  right: -2px;
  z-index: 99;
`;
