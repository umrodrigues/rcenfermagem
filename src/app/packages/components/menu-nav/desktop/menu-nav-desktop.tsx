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
            <div className={styles.menuItem}>
              {item.href ? (
                <Link href={item.href} className={styles.menuLabel}>
                  {item.label} <span className={styles.arrow}>▾</span>
                </Link>
              ) : (
                <span className={styles.menuLabel}>
                  {item.label} <span className={styles.arrow}>▾</span>
                </span>
              )}
            </div>
            <div className={styles.dropdownContent}>
              {item.subItems.map((sub, subIndex) => (
                <Link href={sub.href} key={subIndex} className={styles.dropdownLink}>
                  {sub.label}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link href={item.href!} key={index} className={styles.menuItem}>
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
}
