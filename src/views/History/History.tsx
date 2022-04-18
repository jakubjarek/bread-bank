import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TransactionGroup from './TransactionGroup/TransactionGroup';

import { nanoid } from 'nanoid';

import { TransactionType } from './Transaction/Transaction';

export const data: TransactionType[] = [
  {
    amount: 23.5,
    receiver: 'Jane Doe',
    sender: 'John Doe',
    received: true,
    id: nanoid(),
  },
  {
    amount: 23.5,
    receiver: 'Jane Doe',
    sender: 'John Doe',
    received: false,
    id: nanoid(),
  },
  {
    amount: 23.5,
    receiver: 'Jane Doe',
    sender: 'John Doe',
    received: true,
    id: nanoid(),
  },
];

const History = () => {
  return (
    <GroupsContainer>
      {/*  TransactionGroups here */}
      {data.map((t) => {
        return <TransactionGroup date={''} transactions={data} />;
      })}
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
