import { useState } from 'react';

import { useAuth } from 'Auth/useAuth';
import { toMoneyString } from 'shared/utils/toMoneyString';

import * as S from './Authenticated.styles';
import Divider from 'shared/components/Divider';
import Modal from 'shared/components/Modal/Modal';
import NewTransaction from './NewTransaction/NewTransaction';

const Authenticated = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { accounts } = useAuth();

  const closeModal = () => setModalOpen(false);

  const NoHistory = (
    <div style={{ paddingBlock: '1rem' }}>
      <div style={{ color: 'gray' }}>No history from today</div>
    </div>
  );

  return (
    <>
      <S.InfoContainer>
        <p>Account balance:</p>
        <p>{toMoneyString(accounts?.main)} EUR</p>
      </S.InfoContainer>
      <S.NewTransaciton onClick={() => setModalOpen(true)}>New transaction</S.NewTransaciton>
      <Divider>Today's history</Divider>
      <S.HistoryContainer>{NoHistory}</S.HistoryContainer>
      {modalOpen && (
        <Modal
          handleOutsideClick={closeModal}
          renderContent={<NewTransaction handleModalClose={closeModal} />}
        />
      )}
    </>
  );
};

export default Authenticated;
