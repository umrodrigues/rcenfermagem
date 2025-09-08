'use client';

import { useState } from 'react';
import styles from './HeaderMobile.module.scss';
import Image from 'next/image';
import { FaBars, FaTimes, FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
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
              <Link href="https://www.facebook.com/rcenfermagemparavoce" target="_blank" className={styles.socialLink} aria-label="Facebook">
                <FaFacebookF />
              </Link>
              <Link href="https://www.instagram.com/rcenfermagemparavoce" target="_blank" className={styles.socialLink} aria-label="Instagram">
                <FaInstagram />
              </Link>
            </div>
            
            <Link href="https://api.whatsapp.com/send?phone=5551997822982&text=Ol%C3%A1%2C%20vim%20pelo%20contato%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%21" target='_blank' className={styles.ctaButton}>
              <FaWhatsapp className={styles.buttonIcon} />
            </Link>
          </div>
        </div>
      </div>
      <MenuNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
