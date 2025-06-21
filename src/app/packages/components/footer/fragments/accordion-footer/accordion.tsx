'use client';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import Link from 'next/link';
import { HorizontalSeparator } from '../../../separator/horizontal-separator';
import { IAccordion } from '@/app/packages/types/footer/accordion-footer';
import styles from './Accordion.module.scss';
import clsx from 'clsx';
import { useBreakpoint } from '@/app/packages/ui/viewport/viewport';

const Accordion: React.FC<IAccordion> = ({ type, title, links }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  const [expanded, setExpanded] = useState(!isMobile || isTablet || isDesktop);

  const handleAccordionClick = () => {
    if (isDesktop ) return;

    if (contentRef.current) {
      setExpanded(!expanded);
    }
  };

  useEffect(() => {
    setExpanded(false);
  }, [isMobile]);

  return (
    <div className={clsx(styles.wrapper, styles[type])}>
      {isDesktop ? (
        <div className={styles.header} tabIndex={0}>
          <h3>{title}</h3>
          <div className={styles.iconWrapper} aria-hidden="true">
          <AiOutlineDown className={expanded ? styles.rotated : ''} />
                    </div>
        </div>
      ) : (
        <button className={clsx(styles.header, styles[type])} onClick={handleAccordionClick} tabIndex={0} role="button" aria-expanded={expanded}>
          <h3>{title}</h3>
          <div className={styles.iconWrapper} aria-hidden="true">
          <AiOutlineDown className={expanded ? styles.rotated : ''} />
          </div>
        </button>
      )}
      <div ref={contentRef} className={clsx(styles.content, { [styles.expanded]: expanded }, styles[type])} data-testid="accordion-content">
          <ul className={styles.list}>
          {links.map(link => (
            <li key={link.href} className={clsx(styles.itensList, styles[type])} tabIndex={0}>
              <Link {...link} className={styles.link} tabIndex={-1}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <HorizontalSeparator className={styles.separator} />
    </div>
  );
};

export default Accordion;
