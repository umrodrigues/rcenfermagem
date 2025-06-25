'use client';

import { useBreakpoint } from "../../ui/viewport/viewport";
import MenuNavDesktop from "./desktop/menu-nav-desktop";
import MenuNavMobile from "./mobile/menu-nav-mobile";

type Props = {
  isOpen: boolean;
  onClose?: () => void;
};

export default function MenuNav({ isOpen, onClose }: Props) {
  const { isMobile, isTablet } = useBreakpoint();
  const isMobileOrTablet = isMobile || isTablet;

  const handleOnClose = onClose ?? (() => {});

  return isMobileOrTablet ? <MenuNavMobile isOpen={isOpen} onClose={handleOnClose} /> : <MenuNavDesktop />;

}
