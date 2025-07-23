'use client';

import Image from 'next/image';
import styles from './AboutUs.module.scss';

export default function AboutUs() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <Image
          src="/images/fundo1.jpeg"
          alt="Imagem de fundo sobre cuidado e enfermagem"
          fill
          className={styles.backgroundImage}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Cuidar é nossa essência.<br />Inovar é nossa missão.</h1>
          <p>
            Na RC Enfermagem, oferecemos mais do que serviços de saúde, entregamos experiências de acolhimento,
            respeito e excelência. Nossa equipe é formada por profissionais especializados, preparados para
            proporcionar cuidado humanizado e soluções personalizadas em cada atendimento.
          </p>
        </div>
      </section>

      <section className={styles.about}>
        <p>
          Combinamos conhecimento técnico, tecnologia de ponta e empatia para promover bem-estar, segurança e qualidade de vida
          a quem mais precisa. Atuamos com responsabilidade, paixão e compromisso com resultados reais.
        </p>
        <p>
          Nossas soluções vão além do cuidado tradicional. Acreditamos que cada paciente é único, por isso desenvolvemos estratégias
          de atendimento que respeitam sua autonomia, sua história e suas necessidades específicas.
        </p>
        <ul className={styles.featuresList}>
          <li>🔹 Atendimentos no consultório, sem fila e com hora marcada;</li>
          <li>🔹 Atendimento domiciliar, vamos até você;</li>
          <li>🔹 Profissionais especialistas e com experiência na enfermagem.</li>
        </ul>
        <p className={styles.callToAction}>Queremos transformar a forma como o cuidado é percebido. Vamos juntos? Entre em contato e descubra como podemos fazer a diferença na sua vida ou na sua instituição.</p>
      </section>

      <section className={styles.services}>
        <h2>NOSSOS SERVIÇOS:</h2>

        <article>
          <h3>Consulta de enfermagem</h3>
          <p>
            Acompanhamento individualizado com avaliação completa, orientações personalizadas e plano de cuidados exclusivo.
            Atuamos com foco na prevenção, promoção da saúde, bem-estar e reabilitação.
          </p>
        </article>

        <article>
          <h3>Procedimentos de enfermagem</h3>
          <p>
            Realizamos todos os procedimentos de enfermagem que são de responsabilidade técnica e legal do enfermeiro,
            com segurança, ética e competência. Entre eles, destacam-se:
          </p>
          <ul>
            <li>Sondagens nasoenteral e nasogástrica</li>
            <li>Sondagem vesical de alívio e de demora</li>
            <li>Retirada de pontos</li>
            <li>Salinização de cateter PICC</li>
            <li>Troca de curativos de acesso venoso central</li>
          </ul>
          <p>
            Cada procedimento é executado com técnica apurada, cuidado individualizado e seguindo rigorosamente os protocolos
            atualizados, garantindo conforto, segurança e tranquilidade ao paciente.
          </p>
        </article>

        <article>
          <h3>Administração de medicamentos</h3>
          <p>
            Realizamos a administração segura e responsável de medicamentos por via oral, injetável, subcutânea, intravenosa e outras,
            sempre com acompanhamento profissional habilitado. Seguimos rigorosamente a prescrição médica e protocolos atualizados,
            garantindo cuidado, precisão e tranquilidade para paciente e família, no conforto do seu lar ou consultório.
          </p>
        </article>
      </section>

      <section className={styles.specialty}>
        <h2>NO TRATAMENTO DE LESÕES DE DIFICIL CICATRIZAÇÃO</h2>
        <p>
          Essa é nossa especialidade! Oferecemos recursos modernos e eficazes para o tratamento de diferentes tipos de lesões,
          promovendo recuperação mais rápida, segura e melhores resultados clínicos. Utilizamos avaliação clínica criteriosa e
          prescrição dos melhores protocolos, como:
        </p>
        <ul>
          <li>Laserterapia: estimula a regeneração celular, alivia a dor e acelera a cicatrização.</li>
          <li>Ozonioterapia: ação antimicrobiana e anti-inflamatória, auxiliando na cicatrização de feridas complexas.</li>
          <li>Aplicação de Matriz de Fibrina: promove regeneração tecidual e melhora a qualidade da cicatrização.</li>
          <li>Curativo a Vácuo (Terapia por Pressão Negativa): indicado para feridas crônicas, favorece a granulação e reduz o tempo de cicatrização.</li>
          <li>Bota de Unna: eficaz no tratamento de úlceras venosas, promovendo compressão adequada e melhora da circulação local.</li>
          <li>Coberturas tecnológicas: aliamos conhecimento e experiência para oferecer as melhores coberturas, sempre disponíveis para pronta entrega.</li>
        </ul>
      </section>

      <section className={styles.entrepreneurship}>
        <h2>Empreendedorismo na Enfermagem: Transformando Cuidado em Oportunidade</h2>
        <p>
          A enfermagem está passando por uma revolução — e você pode ser protagonista dessa mudança! O empreendedorismo na enfermagem
          oferece autonomia, impacto social e realização profissional.
        </p>
        <p>
          Na RC Enfermagem, acreditamos no poder do conhecimento aliado à ação, criando experiências exclusivas para quem deseja
          empreender com propósito e segurança:
        </p>
        <ul>
          <li>🔹 Mentorias Estratégicas e individuais, com orientação prática para tirar sua ideia do papel e estruturar seu negócio.</li>
          <li>🔹 Vivência no Consultório de Enfermagem, para aprender gestão, marketing, precificação e acompanhar atendimentos reais.</li>
        </ul>
        <p>
          💡 Saia da teoria e venha viver a prática de um futuro promissor. Desperte seu potencial e seja referência na enfermagem do agora.
        </p>
        <p className={styles.callToAction}>👉 Entre em contato e embarque nessa jornada com a gente!</p>
      </section>

      <section className={styles.education}>
        <h2>RC Educação: Ciência, Prática e Excelência em Cada Aula</h2>
        <p>
          Acreditamos que o conhecimento transforma. Por isso, unimos ciência, inovação e prática para formar profissionais capacitados,
          confiantes e preparados para atuar com excelência.
        </p>
        <p>
          Oferecemos os melhores cursos da região, com metodologia dinâmica e professores experientes, referência em empreendedorismo.
        </p>
        <p>📚 Nossos cursos e treinamentos incluem:</p>
        <ul>
          <li>Feridas Sob Controle: da Avaliação ao Tratamento</li>
          <li>Coberturas e Desbridamento</li>
          <li>Terapia por Pressão Negativa</li>
          <li>Sutura para Enfermeiros</li>
          <li>Tapping na Prática</li>
          <li>Laserpuntura</li>
          <li>Laserterapia e LED na Prevenção e Tratamento de Lesões</li>
        </ul>
        <p>
          🎓 No RC Educação, o estudo é contínuo e a evolução certa. Invista em você, na ciência e seja referência no que faz.
        </p>
        <p className={styles.callToAction}>👉 Fale com a nossa equipe e garanta sua vaga!</p>
      </section>
    </main>
  );
}
