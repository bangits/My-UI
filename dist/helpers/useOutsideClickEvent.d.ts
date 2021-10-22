export declare function useOutsideClickEvent(selector: string): {
    subscribe: (cb: () => void) => void;
    unsubscribe: () => void;
};
