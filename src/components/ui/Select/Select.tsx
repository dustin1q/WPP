import React from 'react';
import './styles.css';

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps {
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    label?: string;
    error?: string;
    id?: string;
}

export const Select: React.FC<SelectProps> = ({
    options,
    value,
    onChange,
    placeholder = 'Select an option...',
    disabled = false,
    className = '',
    label,
    error,
    id,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className="ui-select-container">
            {label && (
                <label className="ui-select-label" htmlFor={id}>
                    {label}
                </label>
            )}
            <select
                id={id}
                className={`ui-select ${error ? 'error' : ''} ${className}`}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${id}-error` : undefined}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && (
                <span className="ui-select-error" id={`${id}-error`} role="alert">
                    {error}
                </span>
            )}
        </div>
    );
};
