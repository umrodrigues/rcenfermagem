'use client';

import styles from './HeaderDesktop.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import MenuNav from '../../menu-nav/MenuNav';

export default function HeaderDesktop() {
  return (
    <header className={styles.desktopNav}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.png" alt="Logo RC Enfermagem" width={180} height={60} />
        </Link>
      </div>
      <MenuNav isOpen />
      <Link href="https://api.whatsapp.com/send?phone=5551997822982" target='_blank' className={styles.ctaButton}>
        Atendimento Domiciliar
      </Link>
    </header>
  );
}
