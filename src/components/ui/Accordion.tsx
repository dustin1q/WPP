import React, { useState } from 'react';
import './styles.css';

export interface AccordionProps {
    summary: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
    summary,
    children,
    defaultOpen = false,
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <details className={`ui-details ${className}`} open={isOpen}>
            <summary className="ui-summary" onClick={(e) => { e.preventDefault(); handleToggle(); }}>
                {summary}
            </summary>
            {isOpen && (
                <div className="ui-details-content">
                    {children}
                </div>
            )}
        </details>
    );
};
