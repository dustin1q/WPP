import React from 'react';
import './styles.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    error?: string;
    onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    onChange,
    className = '',
    type = 'text',
    disabled = false,
    ...props
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className="ui-input-container">
            {label && (
                <label className="ui-input-label" htmlFor={props.id}>
                    {label}
                </label>
            )}
            <input
                {...props}
                type={type}
                disabled={disabled}
                className={`ui-input ${error ? 'error' : ''} ${className}`}
                onChange={handleChange}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${props.id}-error` : undefined}
            />
            {error && (
                <span className="ui-input-error" id={`${props.id}-error`} role="alert">
                    {error}
                </span>
            )}
        </div>
    );
};
