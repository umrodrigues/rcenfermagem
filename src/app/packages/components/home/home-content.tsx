import { Spacer } from "../spacer/spacer";
import { DefaultLayout } from '../default/default-layout';
import CoreValues from "../values/coreValues";



export const HomeContent = () => {
  return (
    <DefaultLayout>

      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <CoreValues />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <CoreValues />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>

      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <CoreValues />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <CoreValues />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <CoreValues />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
      <CoreValues />
      <Spacer spacing={'xl'} desktopSpacing={'xl'}/>
    </DefaultLayout>
  );
};
