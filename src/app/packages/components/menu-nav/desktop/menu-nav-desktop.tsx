'use client';

import Link from 'next/link';
import styles from './MenuNavDesktop.module.scss';
import { menuMock } from '../__mocks__/menu-nav.mock';


export default function MenuNavDesktop() {
  return (
    <nav className={styles.navMenu}>
      {menuMock.map((item, index) =>
        item.subItems ? (
          <div className={styles.dropdown} key={index}>
            <span>{item.label} ▾</span>
            <div className={styles.dropdownContent}>
              {item.subItems.map((sub, subIndex) => (
                <Link href={sub.href} key={subIndex}>
                  {sub.label}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link href={item.href!} key={index}>
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
}
