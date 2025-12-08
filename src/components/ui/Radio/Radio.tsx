import React from 'react';
import './styles.css';

export interface RadioProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
    id?: string;
    name?: string;
    value?: string;
}

export const Radio: React.FC<RadioProps> = ({
    checked = false,
    onChange,
    label,
    disabled = false,
    className = '',
    id,
    name,
    value,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.checked);
    };

    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={`ui-radio-container ${disabled ? 'disabled' : ''} ${className}`}>
            <input
                type="radio"
                id={radioId}
                name={name}
                value={value}
                className="ui-radio"
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
                aria-checked={checked}
            />
            {label && (
                <label htmlFor={radioId} className="ui-radio-label">
                    {label}
                </label>
            )}
        </div>
    );
};
