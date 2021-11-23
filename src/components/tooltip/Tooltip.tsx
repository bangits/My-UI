import React, { useState, useRef, FC, DetailedReactHTMLElement, ReactHTMLElement, cloneElement } from 'react';
import Portal from '../../shared/Portal';
import StyledTooltip from './StyledTooltip';
import Styles from './Tooltip.module.scss';
import { UIColors } from '@/types';
import { Typography } from '@/components';
import { Triangle } from '@/icons';
import classNames from 'classnames';
import TooltipPosition, { TooltipPlacement } from './TooltipPosition';
import { CSSTransition } from 'react-transition-group';
import styles from './Tooltip.module.scss';
export type showEventType = 'click' | 'hover';

export interface TooltipProps {
  children: Parameters<typeof cloneElement>[0];
  text: string;
  delay?: number;
  color?: UIColors;
  space?: number;
  placement?: TooltipPlacement;
  disabled?: boolean;
  showEvent: showEventType;
}

const Tooltip = ({
  children,
  text,
  delay = 0.01,
  color,
  space = 12,
  placement = 'bottom',
  disabled = false,
  showEvent
}: TooltipProps) => {
  const [show, setShow] = useState<0 | 1>(0);

  const posRef = useRef({ x: 0, y: 0 });

  const tooltipRef = useRef();

  const handleMOver = (e) => {
    setShow(1);
    posRef.current = TooltipPosition(e.currentTarget, tooltipRef.current, placement, space);
  };

  const handleMOut = () => setShow(0);

  const handleClick = (e) => {
    if (!show) {
      setShow(1);
      posRef.current = TooltipPosition(e.currentTarget, tooltipRef.current, placement, space);
    } else {
      setShow(0);
    }
  };

  return (
    <>
      {disabled
        ? children
        : showEvent === 'hover'
        ? cloneElement(children, {
            // @ts-expect-error Ignoring typescript for children dynamic usage
            onMouseOver: handleMOver,
            onMouseOut: handleMOut
          })
        : cloneElement(children, {
            // @ts-expect-error Ignoring typescript for children dynamic usage
            onClick: handleClick
          })}

      {disabled || (
        <Portal>
          <CSSTransition
            in={!!show}
            timeout={300}
            classNames={{
              appear: styles['TooltipContainer--appear'],
              exit: styles['TooltipContainer--exit'],
              exitActive: styles['TooltipContainer--exit']
            }}
            unmountOnExit>
            <StyledTooltip color={color} delay={delay} ref={tooltipRef} posRef={posRef}>
              <div>
                <div className={classNames(Styles.TooltipTriangle, Styles[`Tooltip-${placement}`])}>
                  <div>
                    <Triangle />
                  </div>
                </div>
                <Typography component='span' variant='p5'>
                  {text}
                </Typography>
              </div>
            </StyledTooltip>
          </CSSTransition>
        </Portal>
      )}
    </>
  );
};

export default Tooltip;
