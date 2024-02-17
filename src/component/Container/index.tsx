import styles from './index.less';

export default function Container({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.page}>
        <div className={styles.content}>{children}</div>
    </div>
  );
}