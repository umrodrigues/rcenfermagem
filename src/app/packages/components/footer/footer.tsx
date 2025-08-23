'use client';

import styles from './Footer.module.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa';
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
            <div className={styles.socialLinks}>
              <Link href="https://www.facebook.com/rcenfermagemparavoce" target="_blank" className={styles.socialLink} aria-label="Facebook">
                <FaFacebookF />
              </Link>
              <Link href="https://www.instagram.com/rcenfermagemparavoce" target="_blank" className={styles.socialLink} aria-label="Instagram">
                <FaInstagram />
              </Link>
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
                <span>51 8416-3243</span>
              </div>
              
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.icon} />
                <span>contato@rcenfermagemparavoce.com.br</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.legalSection}>
          <div className={styles.legalLinks}>
            <Link href="/politica-de-privacidade" className={styles.legalLink}>
              Política de Privacidade
            </Link>
            <span className={styles.separator}>•</span>
            <Link href="/termos-de-uso" className={styles.legalLink}>
              Termos de Uso
            </Link>
          </div>
          <div className={styles.copyright}>
            © 2024 RC Enfermagem. Todos os direitos reservados.
          </div>
        </div>
        
        <div className={styles.noticeSection}>
          <span className={styles.noticeText}>
            Atenção: Não aceitamos currículos para trabalhar via contato do site. Agradecemos a compreensão.
          </span>
        </div>
        
        <div className={styles.developmentSection}>
          <span className={styles.developmentText}>
            Development by{' '}
            <a
              href="https://www.lunaristech.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.developmentLink}
            >
              Lunaris Tech
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
