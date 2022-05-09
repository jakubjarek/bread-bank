import { useState, useEffect } from 'react';
import { doc, getDoc, DocumentData, FirestoreError } from 'firebase/firestore';

import { db } from '../../firebase';
import { useAuth } from 'Auth/useAuth';

type ReturnType = [DocumentData | undefined, boolean, FirestoreError | undefined];

const useDoc = (path: string): ReturnType => {
  const [data, setData] = useState<DocumentData>();
  const [error, setError] = useState<FirestoreError>();
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    async function getData() {
      try {
        const dataRef = doc(db, path, user!.uid);
        const dataSnap = await getDoc(dataRef);
        setData(dataSnap.data());
      } catch (error) {
        setError(error as FirestoreError);
      }

      setLoading(false);
    }

    getData();
  }, [path, user]);

  return [data, loading, error];
};

export default useDoc;
