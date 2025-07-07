'use client';

import styles from './Reviews.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    nome: 'Daniela Nunes',
    texto: 'Atendimento nota 10. Tive um resultado muito bom com a ozônioterapia na redução da região abdominal, para ser exata, 10cm a menos na circunferência umbilical com apenas 10 sessões!!! Parabéns a essa dupla pelo atendimento!',
  },
  {
    nome: 'Lidiane Oliveira',
    texto: 'Procurei a RC enfermagem desesperada de dor, com os seios machucados da amamentação errada! A consultora Grazi prontamente me encaixou e em menos de 2h eu aprendi a amamentar corretamente e o laser tirou minha dor com a mão! Gratidão!',
  },
  {
    nome: 'Patrícia Souza',
    texto: 'Melhor atendimento que já tive! A equipe é extremamente profissional e atenciosa. Me senti cuidada de verdade durante todo o tratamento. Recomendo muito!',
  },
  {
    nome: 'Carlos Menezes',
    texto: 'Atendimento humanizado e de qualidade. Senti confiança desde o primeiro contato. Muito profissionalismo e carinho no cuidado.',
  },
];

export default function Reviews() {
  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.title}>Depoimentos</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className={styles.swiper}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <span className={styles.quote}>“</span>
              <p className={styles.text}>{item.texto}</p>
              <h4 className={styles.name}>{item.nome}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
