import Transaction, { TransactionType } from './Transaction';

const data: TransactionType[] = [
  {
    type: 'receive',
    receiver: 'You',
    sender: 'Jane Atkins',
    amount: '34,48',
    date: '02.11.2022',
  },
  {
    type: 'receive',
    receiver: 'You',
    sender: 'Katie Mccoy',
    amount: '142,12',
    date: '01.11.2022',
  },
  {
    type: 'transfer',
    receiver: 'Lynne Hamilton',
    sender: 'You',
    amount: '20,00',
    date: '01.11.2022',
  },
  {
    type: 'receive',
    receiver: 'You',
    sender: 'Darren Higgins',
    amount: '44,15',
    date: '30.10.2022',
  },
];

const History = () => {
  return (
    <>
      {data.map((t) => (
        <Transaction
          key={t.amount}
          type={t.type}
          amount={t.amount}
          receiver={t.receiver}
          sender={t.sender}
          date={t.date}
        />
      ))}
    </>
  );
};

export default History;
