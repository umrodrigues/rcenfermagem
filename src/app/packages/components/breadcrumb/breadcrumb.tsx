import styles from './Breadcrumb.module.scss';

type BreadcrumbItem = {
  name: string;
  url?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.breadcrumb} aria-label="breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span key={index} className={styles.item}>
              {!isLast && item.url ? (
                <>
                  <a href={item.url} className={styles.link}>
                    {item.name}
                  </a>
                  <span className={styles.separator}>›</span>
                </>
              ) : (
                <span className={styles.current}>{item.name}</span>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
