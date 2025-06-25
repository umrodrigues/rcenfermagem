import { coreValues } from './__mocks__/cores.mock';
import styles from './CoreValues.module.scss';
import Image from 'next/image';

export default function CoreValues() {
  return (
    <section className={styles.coreValuesSection}>
      <div className={styles.cardsContainer}>
        {coreValues.map((value, index) => (
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
