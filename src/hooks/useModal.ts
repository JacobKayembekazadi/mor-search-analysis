import { useState } from 'react';

export interface ModalContent {
  title: string;
  date: string;
  content: string;
}

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = (content: ModalContent) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return {
    isModalOpen,
    modalContent,
    openModal,
    closeModal,
  };
};