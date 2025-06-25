'use client';

import Link from 'next/link';
import styles from './MenuNavMobile.module.scss';
import { menuMock } from '../__mocks__/menu-nav.mock';
import { useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MenuNavMobile({ isOpen, onClose }: Props) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleDropdown = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menuContent}>
        {menuMock.map((item, index) =>
          item.subItems ? (
            <div className={styles.dropdown} key={index}>
              <button
                className={`${styles.dropdownToggle} ${openIndexes.includes(index) ? styles.active : ''}`}
                onClick={() => toggleDropdown(index)}
                aria-expanded={openIndexes.includes(index)}
                aria-controls={`submenu-${index}`}
              >
                {item.label}
                <span className={styles.arrow} />
              </button>
              <div
                id={`submenu-${index}`}
                className={`${styles.dropdownContent} ${openIndexes.includes(index) ? styles.show : ''}`}
              >
                {item.subItems.map((sub, subIndex) => (
                  <Link href={sub.href} key={subIndex} onClick={onClose}>
                    {sub.label}
                  </Link>
                ))}
              </div>
              <div className={styles.separator} />
            </div>
          ) : (
            <div key={index}>
              <Link href={item.href!} onClick={onClose} className={styles.simpleLink}>
                {item.label}
              </Link>
              <div className={styles.separator} />
            </div>
          )
        )}
      </div>
    </div>
  );
}
