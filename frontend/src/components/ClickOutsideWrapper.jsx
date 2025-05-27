import React, { useEffect, useRef, useState } from 'react';

function ClickOutsideWrapper({ onOutsideClick, children }) {
    
    const wrapperRef = useRef(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {

        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open

        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                console.log('clicked outside');
                setShowPrompt(true);
            }
        };

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setShowPrompt(true);
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.body.style.overflow = ''; // Clear overflow when modal is closed
            document.removeEventListener('mousedown', handleClickOutside); // Remove event listener
            document.removeEventListener('keydown', handleEscape); // Remove event listener
        };
    }, []);

    const handleConfirmClose = () => {
        setShowPrompt(false);
        onOutsideClick();
    };

    const handleCancelClose = () => {
        setShowPrompt(false);
    };

    return (
        <>
            <div ref={wrapperRef}>
                {children}
            </div>

            {showPrompt && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
                        <div className="bg-white p-6 rounded shadow-md text-center max-w-sm w-full">
                            <h2 className="text-lg font-semibold mb-4">Are you sure you want to exit?</h2>
                            <p className="text-sm mb-6">Any unsaved changes will be lost.</p>
                            <div className="flex justify-center gap-6">
                                <button onClick={handleConfirmClose} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                                    Exit
                                </button>
                                <button onClick={handleCancelClose} className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
            )}
        </>
    );
}

export default ClickOutsideWrapper;