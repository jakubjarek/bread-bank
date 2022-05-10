import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import groupTransactionsByDate from './utils/groupTransactionsByDate';
import { TransactionType } from './Transaction/Transaction';
import useDoc from 'shared/hooks/useDoc';

import Spinner from 'shared/components/Spinner';
import TransactionGroup from './TransactionGroup/TransactionGroup';

const History = () => {
  const [transactionList, setTransactionList] = useState<TransactionType[]>();
  const [data, loading, error] = useDoc('transactions');

  useEffect(() => {
    if (loading || error) return;

    if (data) {
      const transactions = Object.values(data);
      setTransactionList(transactions);
    }
  }, [loading, data, error]);

  if (loading) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <div>
        Something went wrong... 😕
        <br />
      </div>
    );
  }

  return (
    <GroupsContainer>
      {transactionList &&
        groupTransactionsByDate(transactionList).map(({ date, transactions }, idx) => (
          <TransactionGroup key={idx} date={date.formatted} transactions={transactions} />
        ))}
      <Outlet />
    </GroupsContainer>
  );
};

export default History;

const GroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const LoadingContainer = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
