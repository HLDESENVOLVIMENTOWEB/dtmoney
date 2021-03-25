import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './Dashboard';
import { Header } from './header';
import { NewTransactionModal } from './NewTransactionModal';
import { GlobalStyles } from './styles/global'

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyles />
    </>
  );
}

