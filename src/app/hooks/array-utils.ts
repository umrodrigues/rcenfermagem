export const clearArray = <T>(arr: T[]) => {
  arr.splice(0, arr.length);
};

export const isEmpty = <T>(arr: T[] | undefined | null): boolean => length(arr) === 0;
export const isNotEmpty = <T>(arr: T[] | undefined | null): boolean => !isEmpty(arr);

export const nthElement = <T>(arr: T[] | undefined | null, index: number): T | undefined => emptyIfNull(arr)[index - 1];
export const first = <T>(arr: T[] | undefined | null): T | undefined => nthElement(arr, 1);
export const last = <T>(arr: T[] | undefined | null): T | undefined => nthElement(arr, emptyIfNull(arr).length);

export const emptyIfNull = <T>(arr: T[] | undefined | null): T[] => arr || [];
export const length = <T>(arr: T[] | undefined | null): number => emptyIfNull(arr).length;
