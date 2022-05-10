import { format, fromUnixTime } from 'date-fns';
import { TransactionType } from '../Transaction/Transaction';

interface TransactionGroupType {
  date: {
    formatted: string;
    seconds: number;
  };
  transactions: TransactionType[];
}

const groupTransactionsByDate = (transactions: TransactionType[]) => {
  const sortedTransactions = transactions.sort((a, b) => b.date.seconds - a.date.seconds);

  const groupedTransactions = sortedTransactions.reduce((acc, t) => {
    const formattedDateString = format(fromUnixTime(t.date.seconds), 'iii dd LL yyyy');
    const dateGroup = acc.find((g) => g.date.formatted === formattedDateString);

    if (!dateGroup) {
      acc.push({
        date: {
          formatted: formattedDateString,
          seconds: t.date.seconds,
        },
        transactions: [t],
      });

      return acc;
    }

    dateGroup.transactions.push(t);
    return acc;
  }, [] as TransactionGroupType[]);

  return groupedTransactions;
};

export default groupTransactionsByDate;
