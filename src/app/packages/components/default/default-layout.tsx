import { BackToTopButton } from "../back-to-top/back-to-top-button";
import Cookies from "../cookies/cookies";
import Copyright from "../copyright/copyright";
import Footer from "../footer/footer";
import { GoToWhatsapp } from "../go-to-whatsapp/go-to-whatsapp";
import Header from "../header/header";


interface DefaultLayoutProps extends React.PropsWithChildren {}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
     <Header />
      {children}
     <Footer />
      <Copyright />
      <GoToWhatsapp />
      <BackToTopButton />
      <Cookies />
    </>
  );
};
