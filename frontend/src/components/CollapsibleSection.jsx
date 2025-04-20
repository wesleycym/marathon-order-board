import React, { useState } from 'react';

function CollapsibleSection({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapsible-section">
            <h4 
                className="collapsible-title"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </h4>
            <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
}

export default CollapsibleSection; 