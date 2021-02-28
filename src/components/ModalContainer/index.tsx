import React from 'react';

import ContainerModal from './Modal';

interface ModalContainerProps {
  idBook: string;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ idBook }) => {
  return <ContainerModal idBook={idBook} />;
};

export default ModalContainer;
