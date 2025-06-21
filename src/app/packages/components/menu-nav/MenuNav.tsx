'use client';

import { useBreakpoint } from "../../ui/viewport/viewport";
import MenuNavDesktop from "./desktop/menu-nav-desktop";
import MenuNavMobile from "./mobile/menu-nav-mobile";

type Props = {
  isOpen: boolean;
};

export default function MenuNav({ isOpen }: Props) {
  const { isMobile, isTablet } = useBreakpoint();
  const isMobileOrTablet = isMobile || isTablet;

  return isMobileOrTablet ? <MenuNavMobile isOpen={isOpen} /> : <MenuNavDesktop />;
}
