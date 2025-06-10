import styles from './CoreValues.module.scss';
import Image from 'next/image';

const values = [
  {
    icon: '/icons/heart.png',
    title: 'Love & Care',
    description: 'To care is to be present, ready to help. To care is to love.',
  },
  {
    icon: '/icons/stethoscope.png',
    title: 'Respect',
    description: 'Respect for life is the foundation of any other right.',
  },
  {
    icon: '/icons/bandage.png',
    title: 'Knowledge',
    description: 'Knowledge that helps and serves to support others.',
  },
  {
    icon: '/icons/cross.png',
    title: 'Gratitude',
    description: 'Recognizing life as a gift, taking care of it and respecting it.',
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
