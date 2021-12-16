import { EditIcon, TrashIndicator } from '@/icons';
import { FC, MouseEvent, ReactNode, useMemo } from 'react';
import styles from './Dialog.module.scss';
import React from 'react';
export interface DialogActionProps {
  actions: {
    icon: ReactNode;
    label: string;
    position?: 'left' | 'right';
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  }[];
}

const DialogActions: FC<DialogActionProps> = ({ actions }) => {
  const dialogActionsLeft = useMemo<DialogActionProps['actions']>(
    () => actions.filter((item) => item.position === 'left'),
    [actions]
  );

  const dialogActionsRight = useMemo<DialogActionProps['actions']>(
    () => actions.filter((item) => !item.position || item.position === 'right'),
    [actions]
  );

  return (
    <div className={styles.DialogActions}>
      <div className={styles.BtnsActions}>
        {dialogActionsLeft.map((action, key) => (
          <button type='button' key={key} onClick={action.onClick}>
            <span>{action.icon}</span>
            <span className={styles.BtnLabel}>{action.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.BtnsActions}>
        {dialogActionsRight.map((action, key) => (
          <button type='button' key={key} onClick={action.onClick}>
            <span>{action.icon}</span>
            <span className={styles.BtnLabel}>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DialogActions;
