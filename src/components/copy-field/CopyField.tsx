import { CopyFieldIcon } from '@/icons';
import { Tooltip, TooltipProps, Typography } from '@/my-ui-core';
import React, { FC } from 'react';
import styles from './CopyField.module.scss';

export interface CopyFieldProps {
  label: string;
  tooltip?: Omit<TooltipProps, 'children'>;
  noDataText?: string;
  onClick: () => void;
}

const CopyField: FC<CopyFieldProps> = ({ label, noDataText = 'N/A', tooltip, onClick }) => {
  return (
    <div className={styles.CopyFieldWrapper}>
      <div className={styles.Url}>
        <Typography variant='p4' component='span'>
          {label || noDataText}
        </Typography>
      </div>
      <div className={styles.Copy}>
        <Tooltip {...tooltip}>
          <CopyFieldIcon onClick={onClick} />
        </Tooltip>
      </div>
    </div>
  );
};

export default CopyField;
