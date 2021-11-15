import { ReactHTMLElement } from 'react';

export type TooltipPlacement = 'right' | 'bottom' | 'left' | 'top';

const position = (currentPosition: string) => ({
  current: currentPosition,
  negate() {
    if (this.current === 'left') return 'right';
    if (this.current === 'right') return 'left';
    if (this.current === 'top') return 'bottom';
    if (this.current === 'bottom') return 'top';
  },
  isHorizontal() {
    return this.current === 'left' || this.current === 'right';
  },
  isVertical() {
    return this.current === 'top' || this.current === 'bottom';
  }
});

const getPoint = (element: HTMLElement, tooltip: HTMLElement, placement: TooltipPlacement, space: number) => {
  const point = () => ({
    x: null,
    y: null,
    reset(p) {
      this.x = p.x;
      this.y = p.y;
    },
    restrictRect(rect) {
      if (this.x < rect.l) this.x = rect.l;
      else if (this.x > rect.r) this.x = rect.r;
      if (this.y < rect.t) this.y = rect.t;
      else if (this.y > rect.b) this.y = rect.b;
    }
  });

  let recurCount = 0;
  const pt = point();
  const bdys = {
    left: space,
    top: space,
    right: document.body.clientWidth - (tooltip.clientWidth + space),
    bottom: window.innerHeight - (tooltip.clientHeight + space)
  };
  const elRect = element.getBoundingClientRect();
  // @ts-ignore
  return (function recursive(placement) {
    recurCount++;
    const pos = position(placement);
    switch (pos.current) {
      case 'left':
        pt.x = elRect.left - (tooltip.offsetWidth + space);
        pt.y = elRect.top + (element.offsetHeight - tooltip.offsetHeight) / 2;
        break;
      case 'right':
        pt.x = elRect.right + space;
        pt.y = elRect.top + (element.offsetHeight - tooltip.offsetHeight) / 2;
        break;
      case 'top':
        pt.x = elRect.left + (element.offsetWidth - tooltip.offsetWidth) / 2;
        pt.y = elRect.top - (tooltip.offsetHeight + space);
        break;
      default:
        pt.x = elRect.left + (element.offsetWidth - tooltip.offsetWidth) / 2;
        pt.y = elRect.bottom + space;
    }

    if (recurCount < 3)
      if (
        (pos.isHorizontal() && (pt.x < bdys.left || pt.x > bdys.right)) ||
        (pos.isVertical() && (pt.y < bdys.top || pt.y > bdys.bottom))
      ) {
        pt.reset(recursive(pos.negate()));
      }

    pt.restrictRect(bdys);

    return pt;
  })(placement);
};

export default getPoint;
