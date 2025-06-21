import { fireEvent, render, screen } from '@testing-library/react';
import Accordion from '../accordion';

jest.mock('locales/server/i18n-server-utils', () => ({
  getLocale: jest.fn().mockReturnValue('pt_BR'),
  getPathPrefix: jest.fn().mockReturnValue(''),
}));

jest.mock('hooks/locale/use-translation', () => ({
  useLocale: jest.fn().mockReturnValue({
    basePath: 'br',
    language: 'pt-BR',
    locale: 'pt_BR',
  }),
  useTranslation: () => ({ t: jest.fn() }),
}));

jest.mock('hooks/ui/navigation/lrsaRedirect', () => ({
  lrsaRedirect: jest.fn(),
}));

describe('Accordion', () => {
  const title = 'title';
  const links = [
    { label: 'Link 1', href: '/link1' },
    { label: 'Link 2', href: '/link2' },
    { label: 'Link 3', href: '/link3' },
  ];

  it('should render links correctly', () => {
    render(<Accordion title={title} links={links} />);

    const accordionLinks = screen.getAllByRole('link');

    expect(accordionLinks).toHaveLength(links.length);

    links.forEach((link, index) => {
      expect(accordionLinks[index]).toHaveTextContent(link.label);
      expect(accordionLinks[index]).toHaveAttribute('href', link.href);
    });
  });

  test('should expands the accordion content when clicked', () => {
    render(<Accordion title={title} links={links} />);

    const headerButton = screen.getByRole('button');

    fireEvent.click(headerButton);

    expect(headerButton).toHaveAttribute('aria-expanded', 'true');
  });
});
