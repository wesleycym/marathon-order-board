import React, { useEffect, useRef } from 'react';

function ClickOutsideWrapper({ onOutsideClick, children }) {
    
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                onOutsideClick();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onOutsideClick]);

    return <div ref={wrapperRef}>{children}</div>;
}

export default ClickOutsideWrapper;