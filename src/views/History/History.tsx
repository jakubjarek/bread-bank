import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { fromUnixTime, format } from 'date-fns';

import { TransactionType } from './Transaction/Transaction';
import useDoc from 'useDoc';

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
        {error}
      </div>
    );
  }

  return (
    <GroupsContainer>
      {transactionList &&
        groupTransactionsByDate(transactionList).map(({ date, transactions }, idx) => (
          <TransactionGroup key={idx} date={date} transactions={transactions} />
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

function groupTransactionsByDate(transactionList: TransactionType[]) {
  const grouped: { date: string; transactions: TransactionType[] }[] = [];

  transactionList.forEach((t) => {
    // unix time to: 'Mon 30 02 2022'
    const dateString = format(fromUnixTime(t.date.seconds), 'iii dd LL yyyy');

    let hasGroup = false;

    if (!grouped.length) {
      grouped.push({
        date: dateString,
        transactions: [t],
      });
      return;
    }

    grouped.forEach((g) => {
      if (g.date === dateString) {
        hasGroup = true;
        g.transactions.push(t);
        return;
      }
    });

    if (!hasGroup) {
      grouped.push({
        date: dateString,
        transactions: [t],
      });
      return;
    }
  });

  return grouped;
}
