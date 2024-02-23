import React, { useRef, useEffect } from 'react';

const useClickOutside = (toggle: () => void) => {
    const ref = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (ref.current && !ref.current.contains(e.target)) {
                toggle();
            }
        };

        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [ref, toggle]);

    return ref;
};

export default useClickOutside;
