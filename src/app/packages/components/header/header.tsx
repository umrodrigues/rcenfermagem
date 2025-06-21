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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
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
