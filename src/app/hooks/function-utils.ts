/* eslint-disable  @typescript-eslint/no-explicit-any */
export const throttle = (func: (...args: any) => any, timeFrame: number) => {
  let lastTime = 0;
  return function (...args: any) {
    const now = new Date().getTime();
    if (now - lastTime >= timeFrame) {
      func(...args);
      lastTime = now;
    }
  };
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const debounce = (func: any, timeout = 300) => {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
