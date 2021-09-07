import styles from './Typography.module.scss';

const Typography = ({ children }) => {
  return <div className={`${styles.Typography} ${styles.p1}`}>{children}</div>;
};

export default Typography;
