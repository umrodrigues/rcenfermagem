'use client';

import styles from './StripBanner.module.scss';

import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

export default function StripBanner() {

  return (
    <div className={styles.topBar}>
        <div className={styles.contact}>
          <span><FaEnvelope /> contato@rcenfermagemparavoce.com.br</span>
          <span><FaPhoneAlt /> (51) 98416.3243 - Enfermeiro Lúcio</span>
          <span><FaWhatsapp /> (51) 99782.2982 - Enfermeira Grasiele</span>
          <span><FaClock /> Suporte 08:00h às 18:00h</span>
        </div>
        <div className={styles.social}>
          <FaFacebookF />
          <FaInstagram />
        </div>
      </div>
  );
}
