import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick} className={styles.button}>
    {children}
  </button>
);

export default Button;