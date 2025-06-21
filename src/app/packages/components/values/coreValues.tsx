import styles from './CoreValues.module.scss';
import Image from 'next/image';

const values = [
  {
    icon: '/icons/heart.png',
    title: 'Amor e Cuidado',
    description: 'Cuidar é estar presente, pronto a ajudar. Cuidar é amar.',
  },
  {
    icon: '/icons/stethoscope.png',
    title: 'Respeito',
    description: 'O respeito à vida é fundamento de qualquer outro direito.',
  },
  {
    icon: '/icons/bandage.png',
    title: 'Conhecimento',
    description: 'O conhecimento que serve para lhe ajudar.',
  },
  {
    icon: '/icons/cross.png',
    title: 'Gratidão',
    description: 'Reconhecer que a vida é um presente, cuidá-la e respeitá-la.',
  },
];

export default function CoreValues() {
  return (
    <section className={styles.coreValuesSection}>
      <div className={styles.cardsContainer}>
        {values.map((value, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={value.icon}
              alt={value.title}
              width={50}
              height={50}
              className={styles.icon}
            />
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
