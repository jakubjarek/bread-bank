import { Outlet } from 'react-router-dom';
import TransactionGroup from './TransactionGroup/TransactionGroup';

const data = [
  {
    date: '11 Mar 2022',
    transactions: [
      {
        id: 't001',
        received: true,
        amount: 14.35,
        receiver: 'John Doe',
        sender: 'Gabe Newell',
      },
      {
        id: 't002',
        received: false,
        amount: 30,
        receiver: 'Pickle Rick',
        sender: 'John Doe',
      },
      {
        id: 't003',
        received: false,
        amount: 1500.23,
        receiver: 'Walter White',
        sender: 'John Doe',
      },
    ],
  },
  {
    date: '9 Mar 2022',
    transactions: [
      {
        id: 't004',
        received: true,
        amount: 30.55,
        receiver: 'John Doe',
        sender: 'Pickle Rick',
      },
      {
        id: 't005',
        received: true,
        amount: 200,
        receiver: 'John Doe',
        sender: 'Pickle Rick',
      },
    ],
  },
  {
    date: '8 Mar 2022',
    transactions: [
      {
        id: 't005',
        received: true,
        amount: 150,
        receiver: 'John Doe',
        sender: 'Pickle Rick',
      },
    ],
  },
];

export const getTransaction = (uid: string) => {
  for (const group of data) {
    for (const trans of group.transactions) {
      if (trans.id === uid) {
        return trans;
      }
    }
  }
};

console.log(getTransaction('t005'));

const History = () => {
  return (
    <>
      {data.map((d) => (
        <TransactionGroup key={d.date} date={d.date} transactions={d.transactions} />
      ))}
      <Outlet />
    </>
  );
};

export default History;
