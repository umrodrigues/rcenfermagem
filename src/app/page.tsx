
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ViewportProvider } from './packages/ui/viewport/viewport';
import { HomeContent } from './packages/components/home/home-content';


export default function Home() {
  return (
    <ViewportProvider>
        <HomeContent />
    </ViewportProvider>
  );
}
