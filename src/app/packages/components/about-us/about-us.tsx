'use client';

import Image from 'next/image';
import styles from './AboutUs.module.scss';
import Link from 'next/link';
import { motion, useAnimation, Variants, Transition } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import {
  FaHeartbeat,
  FaHandsHelping,
  FaMedkit,
  FaLightbulb,
  FaGraduationCap,
  FaUserMd,
  FaAward,
  FaBook,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

const transition: Transition = {
  duration: 0.6,
  ease: 'easeOut',
};

const scrollRevealVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

export default function AboutUs() {
  const controls = useAnimation();
  const [currentGrasieleImage, setCurrentGrasieleImage] = useState(0);
  const [currentLucioImage, setCurrentLucioImage] = useState(0);
  const grasieleIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lucioIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const grasieleImages = ['/images/team/grasi1.jpg', '/images/services/grasi2.jpg', '/images/team/grasi3.jpg'];
  const lucioImages = ['/images/team/lucio1.jpg', '/images/team/lucio2.jpg'];

  useEffect(() => {
    function onScroll() {
      const revealElements = document.querySelectorAll('[data-scroll-reveal]');
      revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          controls.start('visible');
        }
      });
    }

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [controls]);

  // Carrossel automático para Grasiele
  useEffect(() => {
    grasieleIntervalRef.current = setInterval(() => {
      setCurrentGrasieleImage((prev) => (prev + 1) % grasieleImages.length);
    }, 4000);

    return () => {
      if (grasieleIntervalRef.current) {
        clearInterval(grasieleIntervalRef.current);
      }
    };
  }, []);

  // Carrossel automático para Lucio
  useEffect(() => {
    lucioIntervalRef.current = setInterval(() => {
      setCurrentLucioImage((prev) => (prev + 1) % lucioImages.length);
    }, 3500);

    return () => {
      if (lucioIntervalRef.current) {
        clearInterval(lucioIntervalRef.current);
      }
    };
  }, []);

  const nextGrasieleImage = () => {
    setCurrentGrasieleImage((prev) => (prev + 1) % grasieleImages.length);
  };

  const prevGrasieleImage = () => {
    setCurrentGrasieleImage((prev) => (prev - 1 + grasieleImages.length) % grasieleImages.length);
  };

  const nextLucioImage = () => {
    setCurrentLucioImage((prev) => (prev + 1) % lucioImages.length);
  };

  const prevLucioImage = () => {
    setCurrentLucioImage((prev) => (prev - 1 + lucioImages.length) % lucioImages.length);
  };

  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <Image
                          src="/images/backgrounds/fundo1.jpeg"
          alt="Imagem de fundo sobre cuidado e enfermagem"
          fill
          className={styles.backgroundImage}
          priority
        />
        <div className={styles.heroOverlay} />
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1>
            <FaHeartbeat style={{ color: '#00b377', marginRight: 8 }} />
            Cuidar é nossa essência.
            <br />
            Inovar é nossa missão.
          </h1>
          <p>
            Na RC Enfermagem, oferecemos mais do que serviços de saúde, entregamos experiências de acolhimento,
            respeito e excelência. Nossa equipe é formada por profissionais especializados, preparados para proporcionar
            cuidado humanizado e soluções personalizadas em cada atendimento.
          </p>
        </motion.div>
      </section>

      <motion.section
        className={styles.team}
        initial="hidden"
        animate={controls}
        variants={scrollRevealVariants}
        data-scroll-reveal
      >
        <div className={styles.teamHeader}>
          <h2>
            <FaUserMd style={{ color: '#00b377', marginRight: 8 }} />
            Nossa Equipe de Especialistas
          </h2>
          <p>
            Conheça os sócios proprietários da RC Enfermagem, profissionais altamente qualificados e dedicados 
            a oferecer o melhor em cuidados de saúde.
          </p>
        </div>

        <div className={styles.teamMembers}>
          <div className={styles.member}>
            <div className={styles.memberImageSection}>
              <div className={styles.imageCarousel}>
                <div className={styles.carouselContainer}>
                  {grasieleImages.map((image, index) => (
                    <div
                      key={index}
                      className={`${styles.carouselSlide} ${index === currentGrasieleImage ? styles.active : ''}`}
                    >
                      <Image
                        src={image}
                        alt={`Grasiele Costa Rodrigues - Imagem ${index + 1}`}
                        width={400}
                        height={500}
                        className={styles.carouselImage}
                      />
                    </div>
                  ))}
                </div>
                <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={prevGrasieleImage}>
                  <FaChevronLeft />
                </button>
                <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={nextGrasieleImage}>
                  <FaChevronRight />
                </button>
                <div className={styles.carouselIndicators}>
                  {grasieleImages.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.indicator} ${index === currentGrasieleImage ? styles.active : ''}`}
                      onClick={() => setCurrentGrasieleImage(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.memberInfo}>
              <div className={styles.memberHeader}>
                <h3>Grasiele Costa Rodrigues</h3>
                <div className={styles.memberBadges}>
                  <span className={styles.badge}>Sócia proprietária da RC EDUCAÇÃO EM SAÚDE</span>
                </div>
              </div>
              
              <div className={styles.credentials}>
                <div className={styles.credentialSection}>
                  <h4><FaAward style={{ color: '#008a3d', marginRight: 6 }} />Formação Acadêmica</h4>
                  <ul>
                    <li>Mestranda em enfermagem pela UFCSPA</li>
                  </ul>
                </div>

                <div className={styles.credentialSection}>
                  <h4><FaBook style={{ color: '#008a3d', marginRight: 6 }} />Especializações</h4>
                  <ul>
                    <li>Especialista em urgência, emergência e trauma</li>
                    <li>Especialista em auditoria em saúde</li>
                    <li>Especialista em DRG (diagnosis related groups)</li>
                    <li>Enfermeira Dermatológica</li>
                  </ul>
                </div>

                <div className={styles.credentialSection}>
                  <h4><FaMedkit style={{ color: '#008a3d', marginRight: 6 }} />Habilitações</h4>
                  <ul>
                    <li>Habilitada em laserterapia no tratamento de feridas</li>
                    <li>Habilitada em ozônioterapia aplicada aos tratamentos das disfunções sistêmicas, articulares e estéticas</li>
                    <li>Habilitada na obtenção e uso de Matriz de Fibrina Leucoplaquetária Autóloga pela Fibrin Workshop</li>
                  </ul>
                </div>

                <div className={styles.credentialSection}>
                  <h4><FaHandsHelping style={{ color: '#008a3d', marginRight: 6 }} />Atuação Profissional</h4>
                  <ul>
                    <li>Consultora em amamentação</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.member}>
            <div className={styles.memberImageSection}>
              <div className={styles.imageCarousel}>
                <div className={styles.carouselContainer}>
                  {lucioImages.map((image, index) => (
                    <div
                      key={index}
                      className={`${styles.carouselSlide} ${index === currentLucioImage ? styles.active : ''}`}
                    >
                      <Image
                        src={image}
                        alt={`Lucio Rodrigo Lucca de Camargo - Imagem ${index + 1}`}
                        width={400}
                        height={500}
                        className={styles.carouselImage}
                      />
                    </div>
                  ))}
                </div>
                <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={prevLucioImage}>
                  <FaChevronLeft />
                </button>
                <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={nextLucioImage}>
                  <FaChevronRight />
                </button>
                <div className={styles.carouselIndicators}>
                  {lucioImages.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.indicator} ${index === currentLucioImage ? styles.active : ''}`}
                      onClick={() => setCurrentLucioImage(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.memberInfo}>
              <div className={styles.memberHeader}>
                <h3>Lucio Rodrigo Lucca de Camargo</h3>
                <div className={styles.memberBadges}>
                  <span className={styles.badge}>Enfermeiro</span>
                  <span className={styles.badge}>Sócio proprietário da RC Enfermagem</span>
                </div>
              </div>
              
              <div className={styles.credentials}>
                <div className={styles.credentialSection}>
                  <h4><FaAward style={{ color: '#008a3d', marginRight: 6 }} />Formação Acadêmica</h4>
                  <ul>
                    <li>Mestre em Reabilitação e Inclusão</li>
                    <li>Cursando pós Graduação em Matriz de Fibrina Leucoplaquetária Autóloga</li>
                  </ul>
                </div>

                <div className={styles.credentialSection}>
                  <h4><FaBook style={{ color: '#008a3d', marginRight: 6 }} />Especializações</h4>
                  <ul>
                    <li>Especialista em Auditoria em Saúde</li>
                  </ul>
                </div>

                <div className={styles.credentialSection}>
                  <h4><FaMedkit style={{ color: '#008a3d', marginRight: 6 }} />Habilitações</h4>
                  <ul>
                    <li>Habilitado em Laserterapia no tratamento de feridas</li>
                    <li>Habilitado em Ozonioterapia aplicada aos tratamentos das disfunções sistêmicas, articulares e estética</li>
                    <li>Habilitado na obtenção e uso de Matriz de Fibrina Leucoplaquetária Autóloga pela Fibrin Workshop</li>
                  </ul>
                </div>

                <div className={styles.credentialSection}>
                  <h4><FaHandsHelping style={{ color: '#008a3d', marginRight: 6 }} />Atuação Profissional</h4>
                  <ul>
                    <li>Membro do DCEG (Departamento Cientifico de Enfermagem Gerontológica)-ABEN/RS</li>
                    <li>Docente de curso técnico de enfermagem</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.memberTogether}>
            <div className={styles.togetherImageSection}>
              <div className={styles.togetherImageWrapper}>
                <Image
                  src="/images/team/grasilucio1.jpg"
                  alt="Grasiele e Lucio - Sócios proprietários"
                  width={500}
                  height={400}
                  className={styles.togetherImage}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    <h4>Juntos Fazemos a Diferença</h4>
                    <p>Mais de 20 anos de experiência combinada</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.memberInfo}>
              <h3>Juntos Fazemos a Diferença</h3>
              <p>
                A RC Enfermagem foi criada em 2019 através da necessidade de dois sócios sonhadores com a enfermagem 
                empreendedora. Com mais de 20 anos de experiência combinada na área da saúde, Grasiele e Lucio uniram suas 
                especialidades para criar uma empresa que alia conhecimento técnico, 
                inovação e humanização no cuidado com os pacientes.
              </p>
              <p>
                Nossa missão é transformar a forma como o cuidado é percebido, oferecendo serviços de 
                excelência com foco na prevenção, tratamento e reabilitação, sempre com respeito à 
                individualidade de cada paciente.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className={styles.about}
        initial="hidden"
        animate={controls}
        variants={scrollRevealVariants}
        data-scroll-reveal
      >
        <p>
          Combinamos conhecimento técnico, tecnologia de ponta e empatia para promover bem-estar, segurança e qualidade de vida
          a quem mais precisa. Atuamos com responsabilidade, paixão e compromisso com resultados reais.
        </p>
        <p>
          Nossas soluções vão além do cuidado tradicional. Acreditamos que cada paciente é único, por isso desenvolvemos estratégias
          de atendimento que respeitam sua autonomia, sua história e suas necessidades específicas.
        </p>
        <ul className={styles.featuresList}>
          <li>
            <FaHandsHelping style={{ color: '#008a3d', marginRight: 6 }} /> Atendimentos no consultório, sem fila e com hora marcada;
          </li>
          <li>
            <FaHandsHelping style={{ color: '#008a3d', marginRight: 6 }} /> Atendimento domiciliar, vamos até você;
          </li>
          <li>
            <FaHandsHelping style={{ color: '#008a3d', marginRight: 6 }} /> Profissionais especialistas e com experiência na enfermagem.
          </li>
        </ul>
        <p className={styles.callToAction}>
          Queremos transformar a forma como o cuidado é percebido. Vamos juntos? Entre em contato e descubra como podemos fazer a diferença na sua vida ou na sua instituição.
        </p>
      </motion.section>

      <motion.section
        className={styles.services}
        initial="hidden"
        animate={controls}
        variants={scrollRevealVariants}
        data-scroll-reveal
      >
        <h2>
          <FaMedkit style={{ color: '#00b377', marginRight: 8 }} />
          NOSSOS SERVIÇOS:
        </h2>

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
      </motion.section>

      <motion.section
        className={styles.specialty}
        initial="hidden"
        animate={controls}
        variants={scrollRevealVariants}
        data-scroll-reveal
      >
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
      </motion.section>

      <motion.section
        className={styles.entrepreneurship}
        initial="hidden"
        animate={controls}
        variants={scrollRevealVariants}
        data-scroll-reveal
      >
        <h2>
          <FaLightbulb style={{ color: '#00b377', marginRight: 8 }} />
          Empreendedorismo na Enfermagem: Transformando Cuidado em Oportunidade
        </h2>
        <p>
          A enfermagem está passando por uma revolução — e você pode ser protagonista dessa mudança! O empreendedorismo na enfermagem
          oferece autonomia, impacto social e realização profissional.
        </p>
        <p>
          Na RC Enfermagem, acreditamos no poder do conhecimento aliado à ação, criando experiências exclusivas para quem deseja
          empreender com propósito e segurança:
        </p>
        <ul>
          <li>Mentorias Estratégicas e individuais, com orientação prática para tirar sua ideia do papel e estruturar seu negócio.</li>
          <li>Vivência no Consultório de Enfermagem, para aprender gestão, marketing, precificação e acompanhar atendimentos reais.</li>
        </ul>
        <p>
          💡 Saia da teoria e venha viver a prática de um futuro promissor. Desperte seu potencial e seja referência na enfermagem do agora.
        </p>
        <p className={styles.callToAction}>👉 Entre em contato e embarque nessa jornada com a gente!</p>
      </motion.section>

      <motion.section
        className={styles.education}
        initial="hidden"
        animate={controls}
        variants={scrollRevealVariants}
        data-scroll-reveal
      >
        <h2>
          <FaGraduationCap style={{ color: '#00b377', marginRight: 8 }} />
          RC Educação: Ciência, Prática e Excelência em Cada Aula
        </h2>
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
        <Link href="/contato" passHref>
          <p className={styles.callToAction} style={{ cursor: 'pointer' }}>
            👉 Fale com a nossa equipe e garanta sua vaga!
          </p>
        </Link>
      </motion.section>
    </main>
  );
}
