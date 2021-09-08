import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <>
    <button onClick={onClick} className={`${styles.ButtonBase} ${styles.ButtonGhost}`}>
      {/* <div className={styles.LeftIcon}>
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'>
          <g data-name='Group 111'>
            <path
              data-name='Path 15'
              d='M552 123h-14m0 0 7 7m-7-7 7-7'
              transform='translate(-536 -114)'
              style={{ stroke: '#64c9cf', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }}
            />
            <path data-name='Rectangle 677' style={{ fill: 'none' }} d='M0 0h18v18H0z' />
          </g>
        </svg>
      </div> */}

      {children}

      <div className={styles.RightIcon}>
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'>
          <g data-name='Group 111'>
            <path
              data-name='Path 15'
              d='M552 123h-14m0 0 7 7m-7-7 7-7'
              transform='translate(-536 -114)'
              style={{ stroke: '#64c9cf', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }}
            />
            <path data-name='Rectangle 677' style={{ fill: 'none' }} d='M0 0h18v18H0z' />
          </g>
        </svg>
      </div>
    </button>
  </>
);

export default Button;
