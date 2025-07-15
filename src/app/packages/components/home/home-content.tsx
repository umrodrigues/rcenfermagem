import { Spacer } from "../spacer/spacer";
import { DefaultLayout } from '../default/default-layout';
import CoreValues from "../values/coreValues";
import ConsultorioSection from "../consultorio/consultorio-section";
import OurSolutions from "../our-solutions/our-solutions";
import Reviews from "../reviews/reviews";
import PartnerLogos from "../partners/partners-logo";

export const HomeContent = () => {
  return (
    <DefaultLayout>
      <CoreValues />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <ConsultorioSection />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <OurSolutions />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      {/* <Reviews /> */}
      <PartnerLogos/>
    </DefaultLayout>
  );
};
