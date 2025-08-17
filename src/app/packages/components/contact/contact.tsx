'use client';

import styles from './Contact.module.scss';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
} from 'react-icons/fa';

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Fale Conosco</h1>
            <div className={styles.titleUnderline}></div>
          </div>
          <p className={styles.subtitle}>
            Entre em contato conosco para agendar sua consulta ou tirar dúvidas
          </p>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaMapMarkerAlt className={styles.icon} />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Endereço</h2>
              <p className={styles.cardText}>
                Rua Ramiro Barcelos, 630/1310<br />
                Porto Alegre/RS
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaPhoneAlt className={styles.icon} />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Telefone</h2>
              <div className={styles.phoneLinks}>
                <a 
                  href="https://api.whatsapp.com/send?phone=5551984163243" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.phoneLink}
                >
                  (51) 98416.3243 - Lúcio
                </a>
                <a 
                  href="https://api.whatsapp.com/send?phone=5551997822982" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.phoneLink}
                >
                  (51) 99782.2982 - Grasiele
                </a>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaEnvelope className={styles.icon} />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Email</h2>
              <a 
                href="mailto:contato@rcenfermagemparavoce.com.br"
                className={styles.emailLink}
              >
                contato@rcenfermagemparavoce.com.br
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaClock className={styles.icon} />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Atendimento</h2>
              <p className={styles.cardText}>
                Seg. a Sex., das 08h às 18h
              </p>
            </div>
          </div>
        </div>

        <div className={styles.mapSection}>
          <div className={styles.mapHeader}>
            <h3 className={styles.mapTitle}>Nossa Localização</h3>
            <p className={styles.mapSubtitle}>
              Venha nos visitar ou agende uma consulta domiciliar
            </p>
          </div>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps?q=Rua+Ramiro+Barcelos,+630/1310,+Porto+Alegre,+RS&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização RC Enfermagem"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
