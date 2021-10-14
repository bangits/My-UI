export function createOutsideClickListener(selector: string, uniqueElementSelector?: string) {
  let subscriber: ((e: Event) => void) | null = null;
  return {
    subscribe: (cb: () => void) => {
      const outsideClickListener = (subscriber = (event: MouseEvent) => {
        const element = (event.target as HTMLElement).closest(selector);

        if (!element || (uniqueElementSelector && document.querySelectorAll(uniqueElementSelector).length > 1)) cb();
      });
      document.addEventListener('click', outsideClickListener);
    },
    unsubscribe: () => {
      if (subscriber) document.removeEventListener('click', subscriber);
    }
  };
}

export function createElementOutsideClickListener(element: HTMLElement) {
  let subscriber: ((e: Event) => void) | null = null;
  return {
    subscribe: (cb: () => void) => {
      const outsideClickListener = (subscriber = (event: MouseEvent) => {
        if (!element.contains(event.target as Node)) cb();
      });

      document.addEventListener('click', outsideClickListener);
    },
    unsubscribe: () => {
      if (subscriber) document.removeEventListener('click', subscriber);
    }
  };
}
