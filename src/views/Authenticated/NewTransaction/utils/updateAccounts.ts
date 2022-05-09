import { db } from '../../../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { toTwoDecimals } from 'shared/utils/toTwoDecimals';

const updateAccounts = async (amount: number, user: any, accounts: any) => {
  const accountRef = doc(db, 'accounts', user.uid);
  await updateDoc(accountRef, {
    main: toTwoDecimals(accounts.main - amount),
  });
};

export default updateAccounts;
