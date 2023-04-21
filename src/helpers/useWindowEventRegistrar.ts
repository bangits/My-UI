import { useCallback, useEffect } from 'react';

export const useWindowEventRegistrar = (
  event: Array<keyof WindowEventMap>,
  listener: (e: Event) => void,
  unRegisterCondition: boolean
) => {
  const register = useCallback(() => {
    event.forEach((e: keyof WindowEventMap) => {
      window.addEventListener(e, listener);
    });
  }, [listener]);

  const unRegister = useCallback(() => {
    event.forEach((e: keyof WindowEventMap) => {
      window.removeEventListener(e, listener);
    });
  }, [listener]);

  const eventHandlersController = useCallback(() => {
    register();

    if (unRegisterCondition) {
      unRegister();
    }

    return unRegister;
  }, [unRegisterCondition]);

  useEffect(() => eventHandlersController(), [eventHandlersController]);
};
