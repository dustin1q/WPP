import React from 'react';
import './styles.css';

export interface CheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
    id?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    checked = false,
    onChange,
    label,
    disabled = false,
    className = '',
    id,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.checked);
    };

    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={`ui-checkbox-container ${disabled ? 'disabled' : ''} ${className}`}>
            <input
                type="checkbox"
                id={checkboxId}
                className="ui-checkbox"
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
                aria-checked={checked}
            />
            {label && (
                <label htmlFor={checkboxId} className="ui-checkbox-label">
                    {label}
                </label>
            )}
        </div>
    );
};
