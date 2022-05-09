import { format, fromUnixTime } from 'date-fns';
import { TransactionType } from '../Transaction/Transaction';

function groupTransactionsByDate(transactionList: TransactionType[]) {
  const grouped: {
    date: { formated: string; seconds: number };
    transactions: TransactionType[];
  }[] = [];

  transactionList.forEach((t) => {
    // unix time to: 'Mon 30 02 2022'
    const dateString = format(fromUnixTime(t.date.seconds), 'iii dd LL yyyy');

    let hasGroup = false;

    if (!grouped.length) {
      grouped.push({
        date: {
          formated: dateString,
          seconds: t.date.seconds,
        },
        transactions: [t],
      });
      return;
    }

    grouped.forEach((g) => {
      if (g.date.formated === dateString) {
        hasGroup = true;
        g.transactions.push(t);
        return;
      }
    });

    if (!hasGroup) {
      grouped.push({
        date: {
          formated: dateString,
          seconds: t.date.seconds,
        },
        transactions: [t],
      });
      return;
    }
  });

  // sort transactions inside of every group by date descending order
  grouped.forEach((group) => {
    group.transactions = group.transactions.sort((a, b) => b.date.seconds - a.date.seconds);
  });

  // sort groups by date descending
  return grouped.sort((a, b) => b.date.seconds - a.date.seconds);
}

export default groupTransactionsByDate;
