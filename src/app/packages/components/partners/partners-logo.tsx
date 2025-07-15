import Image from 'next/image'
import styles from './PartnerLogos.module.scss'
import { partners } from './__mocks__/partners.mock'

export default function PartnerLogos() {
  
  return (
    <section className={styles.logoSection}>
      <div className={styles.slider}>
        <div className={styles.track}>
          {partners.concat(partners).map((partner, index) => (
            <div className={styles.logo} key={index}>
              <Image src={partner.src} alt={partner.alt} fill sizes="140px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
