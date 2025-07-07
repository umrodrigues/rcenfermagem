import styles from './Copyright.module.scss';

export default function Copyright() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()}{' '}
        <a
          href="https://www.lunaristech.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Lunaris Tech
        </a>
        . Todos os direitos reservados.
      </p>
    </footer>
  );
}
