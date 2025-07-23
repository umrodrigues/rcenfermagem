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
        <h1>Fale Conosco</h1>

        <div className={styles.infoGrid}>
          <div className={styles.card}>
            <FaMapMarkerAlt />
            <div>
              <h2>Endereço</h2>
              <p>Rua Ramiro Barcelos, 630/1310<br />Porto Alegre/RS</p>
            </div>
          </div>

          <div className={styles.card}>
            <FaPhoneAlt />
            <div>
              <h2>Telefone</h2>
              <p>
                <a href="https://api.whatsapp.com/send?phone=5551984163243" target="_blank">
                  (51) 98416.3243 - Lúcio
                </a><br />
                <a href="https://api.whatsapp.com/send?phone=5551997822982" target="_blank">
                  (51) 99782.2982 - Grasiele
                </a>
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <FaEnvelope />
            <div>
              <h2>Email</h2>
              <a href="mailto:contato@rcenfermagemparavoce.com.br">
                contato@rcenfermagemparavoce.com.br
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <FaClock />
            <div>
              <h2>Atendimento</h2>
              <p>Seg. a Sex., das 08h às 18h</p>
            </div>
          </div>
        </div>

        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps?q=Rua+Ramiro+Barcelos,+630/1310,+Porto+Alegre,+RS&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
