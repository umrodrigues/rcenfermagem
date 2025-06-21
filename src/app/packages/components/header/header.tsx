'use client';

import styles from './Header.module.scss';
import StripBanner from '../stripe-banner/strip-banner';
import { useBreakpoint } from '../../ui/viewport/viewport';
import HeaderMobile from './mobile/header-mobile';
import HeaderDesktop from './desktop/header-desktop';


export default function Header() {
  const { isMobile, isTablet } = useBreakpoint();
  const isMobileOrTablet = isMobile || isTablet;

  return (
    <header className={styles.header}>
      <StripBanner />
      {isMobileOrTablet ? <HeaderMobile /> : <HeaderDesktop />}
    </header>
  );
}
