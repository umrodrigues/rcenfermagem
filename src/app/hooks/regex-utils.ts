export const NUMERIC_REGEX = /^[0-9]*$/;
export const NO_SPECIAL_CHARS_REGEX = /[@#$%*+;\\|]/;
export const uruguayPhoneNumberRegex = /^\+[0-9]{11}$/;
export const brazilPhoneNumberRegex = /^\+[0-9]{12,13}$/;
export const onlyLetterRegex = /^[A-Za-z\sáéíóúñçÁÉÍÓÚÑÇ]+$/;
export const onlyNumbersRegex = /^\d+$/;
export const relativeUrlRegex = /^[^/w]+\/[^/].*$|^\/[^/].*$/;
export const oldProductPathRegex = /(?:\d).+?(?=-)/g;
export const alphanumericRegex = /^\w+$/;
export const BLANK_SPACES = /\s/g;
export const REMOVE_DIACRITICS = /[\u0300-\u036f]/g;

export const clearAccentsText = (text: string) => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase();
};

export const capitalizeText = (text: string) => {
  return text.toLowerCase().replace(/(?:^|\s)\S/g, char => char.toUpperCase());
};
