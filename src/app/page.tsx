import Header from "./components/header/header";
import CoreValues from "./components/values/coreValues";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeroBanner from "./components/banner/heroBanner";

export default function Home() {
  return (
    <>
    <Header />
    <HeroBanner/>
    <CoreValues />
    </>
  );
}
