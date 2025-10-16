'use client';
import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import styles from './GoToWhatsapp.module.scss';

export const GoToWhatsapp = () => {
  const handleClick = () => {
    const message = encodeURIComponent('Olá, vim pelo contato do site e gostaria de mais informações!');
    
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'purchase',
        event_category: 'whatsapp',
        event_label: 'Botão Flutuante',
        value: 0
      });
      console.log('[WHATSAPP TRACKING] Evento disparado: Botão Flutuante');
    }
    
    window.open(`https://api.whatsapp.com/send?phone=5505184163243&text=${message}`, '_blank');
  };

  return (
    <div className={styles.container}>
      <button
        onClick={handleClick}
        className={styles.button}
        aria-label="Ir para a conversa do WhatsApp"
      >
        <AiOutlineWhatsApp />
      </button>
      <div className={styles.message} onClick={handleClick}>
        Clique aqui para conversar conosco via WhatsApp!
      </div>
    </div>
  );
};