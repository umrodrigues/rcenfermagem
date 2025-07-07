import { Spacer } from "../spacer/spacer";
import { DefaultLayout } from '../default/default-layout';
import CoreValues from "../values/coreValues";
import ConsultorioSection from "../consultorio/consultorio-section";
import OurSolutions from "../our-solutions/our-solutions";
import Reviews from "../reviews/reviews";
import BlogSection from "../blog/blog-section";
import PartnerLogos from "../partners/partners-logo";
import Footer from "../footer/footer";



export const HomeContent = () => {
  return (
    <DefaultLayout>

      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <CoreValues />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <ConsultorioSection />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <OurSolutions />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <Reviews />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <BlogSection/>
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <PartnerLogos/>
      <Footer />
    </DefaultLayout>
  );
};
