'use client';

import styles from './HeaderDesktop.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import MenuNav from '../../menu-nav/MenuNav';

export default function HeaderDesktop() {
  return (
    <div className={styles.desktopNav}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo RC Enfermagem" width={180} height={60} />
      </div>
      <MenuNav isOpen />
      <Link href="#" className={styles.ctaButton}>
        Atendimento Domiciliar
      </Link>
    </div>
  );
}
