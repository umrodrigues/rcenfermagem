'use client';

import styles from './Footer.module.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.brandSection}>
            <div className={styles.logoContainer}>
              <img src="/logo.png" alt="RC Enfermagem" />
            </div>
          </div>

          <div className={styles.contactSection}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.icon} />
                <span>Rua Ramiro Barcelos, 630/1310<br />Porto Alegre/RS</span>
              </div>
              
              <div className={styles.contactItem}>
                <FaPhoneAlt className={styles.icon} />
                <span>(51) 99782.2982</span>
              </div>
              
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.icon} />
                <span>contato@rcenfermagemparavoce.com.br</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
