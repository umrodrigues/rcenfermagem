'use client';

import styles from './HeaderDesktop.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import MenuNav from '../../menu-nav/MenuNav';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from 'react-icons/fa';

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
            <Link href="#" className={styles.socialLink} aria-label="Facebook">
              <FaFacebookF />
            </Link>
            <Link href="#" className={styles.socialLink} aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link href="tel:5551997822982" className={styles.socialLink} aria-label="Telefone">
              <FaPhone />
            </Link>
          </div>
          
          <Link href="https://api.whatsapp.com/send?phone=5551997822982" target='_blank' className={styles.ctaButton}>
            <FaWhatsapp className={styles.buttonIcon} />
            Atendimento Domiciliar
          </Link>
        </div>
      </div>
    </header>
  );
}
