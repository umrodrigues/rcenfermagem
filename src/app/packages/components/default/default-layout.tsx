import { GoToWhatsapp } from "../go-to-whatsapp/go-to-whatsapp";
import Header from "../header/header";


interface DefaultLayoutProps extends React.PropsWithChildren {}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
     <Header />
      {children}
      <GoToWhatsapp />
    </>
  );
};
