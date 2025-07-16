import styles from './Footer.module.scss';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <img src="/logo.png" alt="Enfermagem Para Você" />
          <p>
            Nos orgulhamos da capacidade de mudar e impactar vidas de maneira saudável.
            Tem curiosidade de saber mais? Entre em contato com nossa equipe ainda hoje.
          </p>
          <div className={styles.social}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className={styles.linksSection}>
          <h4>Institucional</h4>
          <ul>
            <li><a href="#">Quem Somos</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h4>Contato</h4>
          <ul>
            <li><FaMapMarkerAlt /> Rua Ramiro Barcelos, 630/1310 - Porto Alegre/RS</li>
            <li><FaPhoneAlt /> (51) 98416.3243 - Lúcio</li>
            <li><FaPhoneAlt /> (51) 99782.2982 - Grasiele</li>
            <li><FaEnvelope /> contato@rcenfermagemparavoce.com.br</li>
            <li><FaClock /> Suporte 08:00h às 18:00h</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
