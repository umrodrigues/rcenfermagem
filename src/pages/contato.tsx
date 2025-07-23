
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import Contact from '@/app/packages/components/contact/contact';


export default function Contato() {
  return (
    <ViewportProvider>
        <DefaultLayout>
          <Breadcrumb
             items={[
                { name: 'Inicio', url: '/' },
                { name: 'Contato', url: '' },
                    ]}
            />

           <Contact />
 
        </DefaultLayout>
    </ViewportProvider>
  );
}
