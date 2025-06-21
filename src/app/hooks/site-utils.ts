export const isClient = () => typeof window !== 'undefined';
export const isServer = () => !isClient();

export const getUrlParameter = (name: string, url?: string) => {
  if (!url && isClient()) {
    url = window.location.href;
  }
  if (!url) {
    return '';
  }
  name = name.replace(/[[]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
