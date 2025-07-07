import styles from './PartnerLogos.module.scss';

export default function PartnerLogos() {
  return (
    <section className={styles.logoSection}>
      <div className={styles.logoContainer}>
        <img src="partner1.png" alt="Slab Technology" />
        <img src="partner1.png" alt="Orange Core Technology" />
        <img src="partner1.png" alt="TechHub Technology" />
        <img src="partner1.png" alt="Slab Technology" />
        <img src="partner1.png" alt="Codeless IT Company" />
      </div>
    </section>
  );
}
