/* eslint-disable  @typescript-eslint/no-explicit-any */
export const isString = (str: any) => typeof str === 'string';

export const isEmpty = (str: string | undefined | null) => !str || str.trim() === '';
export const isNotEmpty = (str: string | undefined | null) => !isEmpty(str);

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const messageFormat = (message: string, ...args: any[]) => {
  if (args && args.length) {
    for (let idx = 0; idx < args.length; idx++) {
      const arg = args[idx];
      message = message?.replace(`{${idx}}`, arg);
    }
  }
  return message;
};

/**
 *
 * Return the digits of a string.
 *
 * Example: '(11)1-111' returns '111111'
 *
 */
export const onlyDigits = (value: string | undefined | null) => (value ?? '').replace(/\D/g, '');
