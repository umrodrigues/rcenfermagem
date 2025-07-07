import styles from './BlogSection.module.scss';

export default function BlogSection() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <span className={styles.subheading}>BLOG</span>
        <h2 className={styles.title}>Novidades e Notícias</h2>
        <div className={styles.separator}></div>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img src="/imgblog1.jpeg" alt="Cuidar de Pessoas" className={styles.image} />
          <div className={styles.cardText}>
            <h3>Ninguém como o profissional de enfermagem sabe o que é cuidar de pessoas</h3>
            <p>We denounce with righteous indige nation and dislike men who are so beguiled...</p>
            <a href="#" className={styles.link}>Leia Mais</a>
          </div>
        </div>

        <div className={styles.card}>
          <img src="/imgblog1.jpeg" alt="Novembro Azul" className={styles.image} />
          <div className={styles.cardText}>
            <h3>Novembro Azul</h3>
            <p>We denounce with righteous indige nation and dislike men who are so beguiled...</p>
            <a href="#" className={styles.link}>Leia Mais</a>
          </div>
        </div>

        <div className={styles.card}>
          <img src="/imgblog1.jpeg" alt="Manual do Bebê" className={styles.image} />
          <div className={styles.cardText}>
            <h3>O bebê não vem com manual de instruções. O que fazer?</h3>
            <p>We denounce with righteous indige nation and dislike men who are so beguiled...</p>
            <a href="#" className={styles.link}>Leia Mais</a>
          </div>
        </div>
      </div>
    </section>
  );
}
