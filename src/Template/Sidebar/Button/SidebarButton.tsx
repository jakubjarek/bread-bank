import styled from 'styled-components';

type IProps = {
  icon: React.ReactNode;
};

const SidebarButton = ({ icon }: IProps) => {
  return <Wrapper>{icon}</Wrapper>;
};

export default SidebarButton;

const Wrapper = styled.button`
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
    filter: invert(1);
  }
`;
