
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';
import { mockTitle, mockText } from './consulta-de-enfermagem';


export default function AdministracaoDeMedicamentos() {
  return (
    <ViewportProvider>
        <DefaultLayout>
            <Breadcrumb
            items={[
                { name: 'Inicio', url: '/' },
                { name: 'Serviços', url: '/servicos' },
                { name: 'Administração de medicamentos', url: '' },
            ]}
            />

             <ServiceSection
                          title={mockTitle}
                          text={mockText}
                          imageSrc="/imgblog1.jpeg" 
                        />
        </DefaultLayout>
    </ViewportProvider>
  );
}
