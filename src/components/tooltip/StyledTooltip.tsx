import { UIColors } from '@/types';
import { FC, forwardRef, MutableRefObject, PropsWithChildren } from 'react';
import { useStyles } from '@/helpers';
import Styles from './Tooltip.module.scss';
import classNames from 'classnames';

export interface StyledTooltipProps {
  delay?: number;
  color?: UIColors;
  posRef: MutableRefObject<{
    x: number;
    y: number;
  }>;
}

const StyledTooltip = forwardRef<HTMLDivElement, PropsWithChildren<StyledTooltipProps>>(
  ({ children, posRef, color = 'primary' }, ref) => {
    const tooltipClassNames = useStyles(
      {
        root: {
          top: (data) => `${data.y}px`,
          left: (data) => `${data.x}px`
        }
      },
      {
        y: posRef.current.y,
        x: posRef.current.x
      }
    );

    return (
      <div ref={ref} className={classNames(tooltipClassNames.root, Styles.TooltipContainer)}>
        <div className={classNames(Styles.TooltipWrapper, Styles[`TooltipColor--${color}`])}>{children}</div>
      </div>
    );
  }
);

export default StyledTooltip;
