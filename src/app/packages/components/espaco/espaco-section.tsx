'use client';

import styles from './EspacoSection.module.scss';
import Image from 'next/image';

export default function EspacoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageArea}>
          <Image
            src="/images/backgrounds/fundo2.jpeg"
            alt="Imagem do espaço da clínica"
            width={800}
            height={600}
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.textArea}>
          <span className={styles.badge}>A CLÍNICA</span>
          <h2 className={styles.title}>CONHEÇA NOSSO ESPAÇO</h2>
          <p className={styles.description}>
            A enfermagem tem por essência a gestão do cuidado em saúde, pensando nisso criamos um
            espaço dedicado aos cuidados de enfermagem, com dois consultórios montados para atender
            de forma humanizada e acolhedora nossos clientes. Venha conhecer nosso espaço, marque
            sua consulta!
          </p>
          <a className={styles.button} href="#contato">Saiba Mais</a>
        </div>
      </div>
    </section>
  );
}
