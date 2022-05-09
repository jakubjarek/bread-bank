import { db } from '../../../../firebase';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { nanoid } from 'nanoid';

const updateHistory = async (amount: number, user: any) => {
  const transactionsRef = doc(db, 'transactions', user.uid);
  const newId = nanoid();
  await updateDoc(transactionsRef, {
    [newId]: {
      amount: amount,
      id: newId,
      date: serverTimestamp(),
      receiver: 'Jane Doe',
      sender: 'John Doe',
      type: 'send',
    },
  });
};

export default updateHistory;
