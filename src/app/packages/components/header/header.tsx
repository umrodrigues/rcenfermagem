'use client';

import { useState } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import StripBanner from '../stripe-banner/strip-banner';
import MenuNav from '../menu-nav/MenuNav';
import { useBreakpoint } from '../../ui/viewport/viewport';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

   const { isMobile, isTablet, isDesktop } = useBreakpoint();

  return (
    <header className={styles.header}>
      <StripBanner />

      <div className={styles.mainNav}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Logo RC Enfermagem" width={180} height={60} />
        </div>

        <MenuNav isOpen={menuOpen} />

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
