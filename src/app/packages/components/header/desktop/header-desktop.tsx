'use client';

import styles from './HeaderDesktop.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import MenuNav from '../../menu-nav/MenuNav';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function HeaderDesktop() {
  return (
    <header className={styles.desktopNav}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" alt="Logo RC Enfermagem" width={180} height={60} />
          </Link>
        </div>
        
        <nav className={styles.navigation}>
          <MenuNav isOpen />
        </nav>
        
        <div className={styles.actions}>
          <div className={styles.socialLinks}>
            <Link href="https://www.facebook.com/rcenfermagemparavoce" target="_blank" className={styles.socialLink} aria-label="Facebook">
              <FaFacebookF />
            </Link>
            <Link href="https://www.instagram.com/rcenfermagemparavoce" target="_blank" className={styles.socialLink} aria-label="Instagram">
              <FaInstagram />
            </Link>
          </div>
          
          <Link href="https://api.whatsapp.com/send?phone=5505184163243&text=Ol%C3%A1%2C%20vim%20pelo%20contato%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%21" target='_blank' className={styles.ctaButton}>
            <FaWhatsapp className={styles.buttonIcon} />
            Atendimento Domiciliar
          </Link>
        </div>
      </div>
    </header>
  );
}
