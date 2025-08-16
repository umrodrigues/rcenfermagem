'use client';

import { useState } from 'react';
import styles from './HeaderMobile.module.scss';
import Image from 'next/image';
import { FaBars, FaTimes, FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from 'react-icons/fa';
import MenuNav from '../../menu-nav/MenuNav';
import Link from 'next/link';

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.mobileNav}>
        <div className={styles.headerContent}>
          <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          
          <div className={styles.logo}>
            <Image src="/logo.png" alt="Logo RC Enfermagem" width={140} height={47} />
          </div>
          
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
            </Link>
          </div>
        </div>
      </div>
      <MenuNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
