import React from 'react';
import styles from './TextInput.module.scss';

function TextInputs({ children }) {
  return (
    <div className={`${styles.TextInputWrapper} ${styles.TextInputError}`}>
      <input
        className={`${styles.TextInputBase}`}
      />

      <span className={styles.Explanation}>Explanation</span>

      <div className={styles.LeftIcon}>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
          <g data-name='Group 134'>
            <path
              data-name='Path 1225'
              d='M545.5 128v-1.556a3.119 3.119 0 0 0-3.125-3.111h-6.25a3.119 3.119 0 0 0-3.125 3.111V128m9.375-10.889A3.125 3.125 0 1 1 539.25 114a3.118 3.118 0 0 1 3.125 3.111z'
              transform='translate(-527 -109)'
              style={{stroke:'#7d86a9', strokeLinecap:'round', strokeLinejoin:'round', fill:'none'}}
            />
            <path data-name='Rectangle 687' style={{fill:'none'}} d='M0 0h24v24H0z' />
          </g>
        </svg>
      </div>
      {/* <div className={styles.RightIcon}>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
          <g data-name='Group 134'>
            <path
              data-name='Path 1225'
              d='M545.5 128v-1.556a3.119 3.119 0 0 0-3.125-3.111h-6.25a3.119 3.119 0 0 0-3.125 3.111V128m9.375-10.889A3.125 3.125 0 1 1 539.25 114a3.118 3.118 0 0 1 3.125 3.111z'
              transform='translate(-527 -109)'
              style={{stroke:'#7d86a9', strokeLinecap:'round', strokeLinejoin:'round', fill:'none'}}
            />
            <path data-name='Rectangle 687' style={{fill:'none'}} d='M0 0h24v24H0z' />
          </g>
        </svg>
      </div> */}
    </div>
  );
}

export default TextInputs;
