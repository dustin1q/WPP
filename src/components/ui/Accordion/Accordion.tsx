import React from 'react';
import './styles.css';

export interface AccordionProps {
    summary: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
    name?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
    summary,
    children,
    defaultOpen = false,
    className = '',
    name,
}) => {
    return (
        <details
            className={`ui-details ${className}`}
            open={defaultOpen}
            {...(name && { name })}
        >
            <summary className="ui-summary">
                {summary}
            </summary>
            <div className="ui-details-content">
                {children}
            </div>
        </details>
    );
};
