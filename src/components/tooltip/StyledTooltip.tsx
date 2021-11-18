import { UIColors } from '@/types';
import { FC, forwardRef, MutableRefObject, PropsWithChildren } from 'react';
import { useStyles } from '@/helpers';
import Styles from './Tooltip.module.scss';
import classNames from 'classnames';
import { getMyUIPrefix } from '@/configs';

export interface StyledTooltipProps {
  delay?: number;
  color?: UIColors;
  posRef: MutableRefObject<{
    x: number;
    y: number;
  }>;
  show?: 0 | 1;
}

const StyledTooltip = forwardRef<HTMLDivElement, PropsWithChildren<StyledTooltipProps>>(
  ({ children, show = 0, posRef, color = 'primary' }, ref) => {
    const tooltipClassNames = useStyles(
      {
        root: {
          top: (data) => `${data.y}px`,
          left: (data) => `${data.x}px`,
          opacity: (data) => data.show
        }
      },
      {
        y: posRef.current.y,
        x: posRef.current.x,
        show
      }
    );

    return (
      <div
        ref={ref}
        className={classNames(
          tooltipClassNames.root,
          Styles.TooltipContainer,
          `${getMyUIPrefix()}-root`,
          `${getMyUIPrefix()}-TooltipContainer`
        )}>
        <div
          className={classNames(
            Styles.TooltipWrapper,
            `${getMyUIPrefix()}-TooltipWrapper`,
            Styles[`TooltipColor--${color}`]
          )}>
          {children}
        </div>
      </div>
    );
  }
);

export default StyledTooltip;
