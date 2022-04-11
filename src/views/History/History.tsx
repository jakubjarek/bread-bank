import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TransactionGroup from './TransactionGroup/TransactionGroup';

const History = () => {
  return (
    <GroupsContainer>
      {/*  TransactionGroups here */}
      <Outlet />
    </GroupsContainer>
  );
};

const GroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default History;
