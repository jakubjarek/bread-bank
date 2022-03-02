import styled from 'styled-components';

export const Wrapper = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 6px;
  border-radius: 4px;

  & svg {
    width: 22px;
    height: 22px;
  }

  &:first-of-type {
    margin-right: 6px;
  }

  &:hover,
  &:focus {
    background-color: black;
  }

  &:hover svg,
  &:focus svg {
    filter: invert(1);
  }
`;

export const NotificationNumber = styled.span`
  width: 18px;
  height: 18px;
  line-height: 16px;
  border-radius: 999px;
  background-color: red;
  color: white;
  font-weight: bold;
  position: absolute;
  font-size: 12px;
  top: -2px;
  right: -2px;
  z-index: 99;
`;
