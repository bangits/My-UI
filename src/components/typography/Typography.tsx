import styles from './Typography.module.scss';

const Typography = ({ children }) => {
  return <div className={`${styles.Typography} ${styles.h1}`}>{children}</div>;
};

export default Typography;
