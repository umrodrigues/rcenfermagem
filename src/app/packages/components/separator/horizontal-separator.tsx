import { clsx } from 'clsx';
import styles from './HorizontalSeparator.module.scss';
import { IHorizontalSeparator } from '@/app/types/separator/horizontalSeparator';


const HorizontalSeparator = ({ className }: IHorizontalSeparator) => {
  return <div className={clsx(styles.horizontalSeparator, className)}></div>;
};

export { HorizontalSeparator };
