
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';


export default function PoliticaDePrivacidade() {
  return (
    <ViewportProvider>
        <DefaultLayout>
            <Breadcrumb
            items={[
                { name: 'Home', url: '/' },
                { name: 'Equipe', url: '/equipe' },
                { name: 'Detalhes', url: '' },
            ]}
            />

           
        </DefaultLayout>
    </ViewportProvider>
  );
}
