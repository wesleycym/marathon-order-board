import React, { useEffect, useRef } from 'react';

function ClickOutsideWrapper({ onOutsideClick, children }) {
    
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                onOutsideClick();
            }
        };

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onOutsideClick();
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onOutsideClick]);

    return <div ref={wrapperRef}>{children}</div>;
}

export default ClickOutsideWrapper;