import { Spacer } from "../spacer/spacer";
import { DefaultLayout } from '../default/default-layout';
import CoreValues from "../values/coreValues";
import ConsultorioSection from "../consultorio/consultorio-section";
import EspacoSection from "../espaco/espaco-section";
import OurSolutions from "../our-solutions/our-solutions";



export const HomeContent = () => {
  return (
    <DefaultLayout>

      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <CoreValues />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <ConsultorioSection />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>

      <EspacoSection />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <OurSolutions />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <CoreValues />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <CoreValues />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
    </DefaultLayout>
  );
};
