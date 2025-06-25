'use client';

import styles from './ConsultorioSection.module.scss';
import Image from 'next/image';

export default function ConsultorioSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageArea}>
          <Image
            src="/images/fundo1.jpeg"
            alt="Equipe RC Enfermagem"
            width={600}
            height={600}
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.textArea}>
          <span className={styles.subTitle}>RC ENFERMAGEM PARA VOCÊ</span>
          <h2 className={styles.title}>NOSSO CONSULTÓRIO</h2>
          <p className={styles.description}>
            Na RC Enfermagem para Você proporcionamos aos clientes experiências únicas de carinho,
            atenção e cuidados com a saúde, com tecnologias e conhecimentos essenciais para prestar
            um serviço de alta qualidade, sempre respeitando a autonomia e independência do sujeito.
            Nos orgulhamos da capacidade de mudar e impactar vidas de maneira saudável. Tem
            curiosidade de saber mais? Entre em contato com nossa equipe ainda hoje.
          </p>
          <a className={styles.button} href="#contato">SAIBA MAIS</a>
        </div>
      </div>
    </section>
  );
}
