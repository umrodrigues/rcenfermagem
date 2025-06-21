import { ISpacer } from '@/app/types/spacer/SpacerType';
import styles from './SpacerStyle.module.scss';

const Spacer = ({ spacing, desktopSpacing }: ISpacer) => {
  return (
    <div
      className={`${styles.containerSpacer} ${styles[`spacing-${spacing}`]} ${styles[`desktop-spacing-${desktopSpacing}`]}`}
    />
  );
};

export { Spacer };
