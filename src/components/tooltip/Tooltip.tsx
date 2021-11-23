import React, { useState, useRef, cloneElement } from 'react';
import { Portal } from '@/components';
import StyledTooltip from './StyledTooltip';
import Styles from './Tooltip.module.scss';
import { UIColors } from '@/types';
import { Typography } from '@/components';
import { Triangle } from '@/icons';
import classNames from 'classnames';
import TooltipPosition, { TooltipPlacement } from './TooltipPosition';
import { getMyUIPrefix } from '@/configs';

export interface TooltipProps {
  children: Parameters<typeof cloneElement>[0];
  text: string;
  delay?: number;
  color?: UIColors;
  space?: number;
  placement?: TooltipPlacement;
  disabled?: boolean;
}

const Tooltip = ({
  children,
  text,
  delay = 0.01,
  color,
  space = 12,
  placement = 'bottom',
  disabled = false
}: TooltipProps) => {
  const [show, setShow] = useState<0 | 1>(0);

  const posRef = useRef({ x: 0, y: 0 });

  const tooltipRef = useRef();

  const handleMOver = (e) => {
    setShow(1);
    posRef.current = TooltipPosition(e.currentTarget, tooltipRef.current, placement, space);
  };

  const handleMOut = () => setShow(0);

  return (
    <>
      {disabled
        ? children
        : cloneElement(children, {
            // @ts-ignore
            onMouseOver: handleMOver,
            onMouseOut: handleMOut
          })}

      {disabled || (
        <Portal>
          <StyledTooltip color={color} delay={delay} ref={tooltipRef} posRef={posRef} show={show}>
            <div className={`${getMyUIPrefix()}-TooltipWrapper`}>
              <div
                className={classNames(
                  Styles.TooltipTriangle,
                  `${getMyUIPrefix()}-TooltipTriangle`,
                  Styles[`Tooltip-${placement}`]
                )}>
                <div>
                  <Triangle />
                </div>
              </div>
              <Typography component='span' variant='p5'>
                {text}
              </Typography>
            </div>
          </StyledTooltip>
        </Portal>
      )}
    </>
  );
};

export default Tooltip;
