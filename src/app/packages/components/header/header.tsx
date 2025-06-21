'use client';

import { useState } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
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
import StripBanner from '../stripe-banner/strip-banner';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      
      <StripBanner />

      <div className={styles.mainNav}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Logo RC Enfermagem" width={180} height={60} />
        </div>

        <nav className={`${styles.navMenu} ${menuOpen ? styles.open : ''}`}>
          <div className={styles.dropdown}>
            <span>Empresa ▾</span>
            <div className={styles.dropdownContent}>
              <Link href="#">Quem Somos</Link>
              <Link href="#">Consultório</Link>
            </div>
          </div>
          <Link href="#">Equipe</Link>
          <div className={styles.dropdown}>
            <span>Serviços ▾</span>
            <div className={styles.dropdownContent}>
              <Link href="#">Serviço 1</Link>
              <Link href="#">Serviço 2</Link>
            </div>
          </div>
          <Link href="#">Depoimentos</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contato</Link>
        </nav>

        <Link href="#" className={styles.ctaButton}>
          Atendimento Domiciliar
        </Link>

        <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
