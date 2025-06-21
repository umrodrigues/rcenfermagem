'use client';

import { useState } from 'react';
import styles from './HeaderMobile.module.scss';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import MenuNav from '../../menu-nav/MenuNav';

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.mobileNav}>
        <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes  size={24}/> : <FaBars size={24}/>}
        </button>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Logo RC Enfermagem" width={150} height={50} />
        </div>
        <div className={styles.placeholder}></div>
      </div>
      <MenuNav isOpen={menuOpen} />
    </>
  );
}
