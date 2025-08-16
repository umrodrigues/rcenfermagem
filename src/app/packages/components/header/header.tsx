'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import { useBreakpoint } from '../../ui/viewport/viewport';
import HeaderMobile from './mobile/header-mobile';
import HeaderDesktop from './desktop/header-desktop';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { isMobile, isTablet } = useBreakpoint();
  const isMobileOrTablet = isMobile || isTablet;

  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);



  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [isSticky, isMobileOrTablet]);

  return (
    <>

      <div style={{ paddingTop: isSticky ? `${headerHeight}px` : 0 }}>
        {isSticky && hasScrolled ? (
          <motion.div
            ref={headerRef}
            key="animated-header"
            className={`${styles.header} ${styles.sticky}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {isMobileOrTablet ? <HeaderMobile /> : <HeaderDesktop />}
          </motion.div>
        ) : (
          <div ref={headerRef} className={styles.header}>
            {isMobileOrTablet ? <HeaderMobile /> : <HeaderDesktop />}
          </div>
        )}
      </div>
    </>
  );
}
