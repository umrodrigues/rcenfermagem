'use client';

import Slider from 'react-slick';
import styles from './HeroBanner.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const bannerData = [
  {
    image: '/images/banner1.jpeg',
    title: 'RC Enfermagem',
    subtitle: 'Bem vindos a',
    description: 'Para você um espaço de acolhimento e humanização nos cuidados em saúde',
  },
  {
    image: '/images/banner2.jpeg',
    title: 'Amor RC',
    subtitle: '',
    description: 'Cuidamos de cada paciente como se fosse alguém da nossa família',
  },
];

function NextArrow({ onClick }: any) {
  return (
    <button className={`${styles.arrow} ${styles.right}`} onClick={onClick}>
      <FaChevronRight />
    </button>
  );
}

function PrevArrow({ onClick }: any) {
  return (
    <button className={`${styles.arrow} ${styles.left}`} onClick={onClick}>
      <FaChevronLeft />
    </button>
  );
}

export default function HeroBanner() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className={styles.bannerWrapper}>
      <Slider {...settings}>
        {bannerData.map((slide, index) => (
          <div key={index} className={styles.banner}>
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              className={styles.backgroundImage}
            />
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              {slide.subtitle && <h2>{slide.subtitle}</h2>}
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button className={styles.button}>Saiba Mais</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
