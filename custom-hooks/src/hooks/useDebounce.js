import {useCallback, useRef} from "react";

export const useDebounce = (cb, delay) => {
    const timer = useRef(null);

    const debouncedCb = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            cb(...args)
        }, delay);

    }, [cb, delay])
    return debouncedCb
}