import styles from './Breadcrumb.module.scss';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  title?: string;
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ title, items }: BreadcrumbProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {title && (
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.titleUnderline}></div>
          </div>
        )}
        
        <nav className={styles.breadcrumb} aria-label="breadcrumb">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <span key={index} className={styles.item}>
                {!isLast && item.href ? (
                  <>
                    <a href={item.href} className={styles.link}>
                      {item.label}
                    </a>
                    <span className={styles.separator}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </>
                ) : (
                  <span className={styles.current}>{item.label}</span>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
