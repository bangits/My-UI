import { GoToLivePopUp } from '@/icons';
import { Button, Typography } from '@/my-ui-core';
import React, { useState } from 'react';
import styles from './PopUp.module.scss';

const PopUp = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}>
        open
      </button>
      {open && (
        <div className={styles.PopUpWrapper}>
          <div className={styles.PopUpWrapperParent}>
            <div className={styles.PopUpCointainer}>
              <div className={styles.PopUp}>
                <div className={styles.PopUpIconContainer}>
                  <GoToLivePopUp />
                </div>
                <div className={styles.PopUpLabel}>
                  <Typography component='h2' variant='h2'>
                    Go to Live
                  </Typography>
                </div>
                <div className={styles.PopUpText}>
                  <Typography component='p' variant='p3'>
                    Do you want to publish <span>"Albatros"</span> partner ?
                  </Typography>
                </div>
                <div className={styles.PopUpBtnGroup}>
                  <Button
                    variant='ghost'
                    onClick={() => {
                      setOpen(false);
                    }}>
                    Cancel
                  </Button>
                  <Button variant='default'>Publish</Button>
                </div>
              </div>
            </div>
            <div className={styles.Overlay}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
