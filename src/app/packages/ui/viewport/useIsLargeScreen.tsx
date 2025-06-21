import { isClient } from '@/app/hooks/site-utils';
import { useEffect, useState } from 'react';


const hasMaxDisplay = (value?: number) => (value !== undefined ? window.innerWidth < value : true);
const isLargeScreenWidth = (breakpoint: number, maxDisplay?: number) =>
  isClient() && window.innerWidth >= breakpoint && hasMaxDisplay(maxDisplay);

export const useIsLargeScreen = (breakpoint = 900, maxDisplay?: number) => {
  const [isLargeScreen, setIsLargeScreen] = useState(isLargeScreenWidth(breakpoint, maxDisplay));

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(isLargeScreenWidth(breakpoint, maxDisplay));
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint, maxDisplay]);

  return isLargeScreen;
};
