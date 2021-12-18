import { useEffect } from 'react';

export function useOutsideClickEvent(selector: string) {
  let subscriber: ((e: Event) => void) | null = null;
  return {
    subscribe: (cb: () => void) => {
      const outsideClickListener = (subscriber = (event: MouseEvent) => {
        if (!(event.target as HTMLElement).closest(selector)) cb();
      });
      document.addEventListener('click', outsideClickListener);
    },
    unsubscribe: () => {
      if (subscriber) document.removeEventListener('click', subscriber);
    }
  };
}

export function useOutsideClickWithRef(ref, action, prevent?: boolean, event = 'mousedown') {
  useEffect(() => {
    if (prevent) return;

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        action(event);
      }
    };
    document.addEventListener(event, handleClickOutside);
    return () => {
      document.removeEventListener(event, handleClickOutside);
    };
  }, [ref, prevent]);
}
