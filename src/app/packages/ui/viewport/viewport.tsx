'use client';

import React, { PropsWithChildren } from 'react';
import { useIsLargeScreen } from './useIsLargeScreen';

export interface IViewportContext {
  isLargeDesktop: boolean;
  isDesktop: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isSmallMobile: boolean;
}

const defaultViewport = { isLargeDesktop: false, isDesktop: false, isTablet: false, isMobile: true, isSmallMobile: false };

export const ViewportContext = React.createContext<IViewportContext>(defaultViewport);

const LARGE_DESK_BREAKPOINT = 1300;
const DESK_BREAKPOINT = 900;
const TABLET_BREAKPOINT = 640;
const MOBILE_BREAKPOINT = 375;
const SMALL_MOBILE_BREAKPOINT = 320;

export const ViewportProvider = ({ children }: PropsWithChildren) => {
  const viewport = {
    isDesktop: useIsLargeScreen(DESK_BREAKPOINT),
    isTablet: useIsLargeScreen(TABLET_BREAKPOINT, DESK_BREAKPOINT),
    isMobile: !useIsLargeScreen(TABLET_BREAKPOINT),
    isSmallMobile: useIsLargeScreen(SMALL_MOBILE_BREAKPOINT, MOBILE_BREAKPOINT),
    isLargeDesktop: useIsLargeScreen(LARGE_DESK_BREAKPOINT),
  };

  return <ViewportContext.Provider value={viewport}>{children}</ViewportContext.Provider>;
};

export const useBreakpoint = (): IViewportContext => {
  return React.useContext(ViewportContext);
};
