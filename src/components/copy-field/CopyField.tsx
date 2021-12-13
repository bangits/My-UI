import { CopyFieldIcon } from '@/icons';
import { Typography, Tooltip, TooltipProps } from '@/my-ui-core';
import React, { FC, useCallback } from 'react';
import styles from './CopyField.module.scss';

export interface CopyFieldProps {
  label: string;
  tooltip?: Omit<TooltipProps, 'children'>;
  noDataText?: string;
}

const CopyField: FC<CopyFieldProps> = ({ label, noDataText = 'N/A', tooltip }) => {
  const onCopyText = useCallback((text) => {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }, []);

  return (
    <div className={styles.CopyFieldWrapper}>
      <div className={styles.Url}>
        <Typography variant='p4' component='span'>
          {label || noDataText}
        </Typography>
      </div>
      <div className={styles.Copy}>
        <Tooltip {...tooltip}>
          <CopyFieldIcon onClick={() => onCopyText(label || noDataText)} />
        </Tooltip>
      </div>
    </div>
  );
};

export default CopyField;
