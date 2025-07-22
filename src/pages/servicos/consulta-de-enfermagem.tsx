
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/packages/ui/styles/globals.scss";
import { ViewportProvider } from '@/app/packages/ui/viewport/viewport';
import { DefaultLayout } from '@/app/packages/components/default/default-layout';
import Breadcrumb from '@/app/packages/components/breadcrumb/breadcrumb';
import ServiceSection from '@/app/packages/components/service-section/service-section';

export const mockTitle = 'Consultoria no gerenciamento dos processos de enfermagem'

export const mockText = `Os processos de enfermagem constituem uma parte importantíssima nos serviços de saúde, uma vez que são ferramentas que trazem segurança aos pacientes, instituições e aos profissionais. São muitas variáveis envolvidas no empreendedorismo na enfermagem, seja jurídica, gerencial ou de tecnologias, e todas importantes para conquistar uma boa posição no mercado. Contar com um especialista neste momento pode trazer segurança, fortalecimento e diminuição de custos, se tornando um processo mais assertivo.`

export default function ConsultaDeEnfermagem() {
  return (
    <ViewportProvider>
        <DefaultLayout>
            <Breadcrumb
            items={[
                { name: 'Inicio', url: '/' },
                { name: 'Serviços', url: '/servicos' },
                { name: 'Consulta de enfermagem', url: '' },
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
