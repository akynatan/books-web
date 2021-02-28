import React, { createContext, useContext, useCallback, useState } from 'react';
import ModalContainer from '../components/ModalContainer';

interface ModalContextData {
  addModal(id: string): void;
  removeModal(): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [idBook, setIdBook] = useState<string>('');

  const addModal = useCallback(id => {
    setIdBook(id);
  }, []);

  const removeModal = useCallback(() => {
    setIdBook('');
  }, []);

  return (
    <ModalContext.Provider value={{ addModal, removeModal }}>
      {children}
      <ModalContainer idBook={idBook} />
    </ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider.');
  }

  return context;
}

export { ModalProvider, useModal };
