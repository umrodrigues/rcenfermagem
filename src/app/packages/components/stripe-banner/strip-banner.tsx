'use client';

import styles from './StripBanner.module.scss';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

export default function StripBanner() {
  return (
    <div className={styles.topBar}>
      <div className={styles.innerContainer}>
        <div className={styles.contact}>
          <a href="mailto:contato@rcenfermagemparavoce.com.br" target="_blank" rel="noopener noreferrer">
            <FaEnvelope /> contato@rcenfermagemparavoce.com.br
          </a>
          <a href="https://api.whatsapp.com/send?phone=5551984163243" target="_blank" rel="noopener noreferrer">
            <FaPhoneAlt /> (51) 98416.3243 - Enfermeiro Lúcio
          </a>
          <a href="https://api.whatsapp.com/send?phone=5551997822982" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> (51) 99782.2982 - Enfermeira Grasiele
          </a>
        </div>
        <div className={styles.rightSide}>
          <span><FaClock /> Suporte 08:00h às 18:00h</span>
          <div className={styles.social}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
