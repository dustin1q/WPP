import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
    title: 'UI/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number', 'tel', 'url'],
        },
        disabled: { control: 'boolean' },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        type: 'text',
        placeholder: 'Enter text...',
        label: 'Text Input',
        id: 'text-input',
    },
};

export const Email: Story = {
    args: {
        type: 'email',
        placeholder: 'Enter your email...',
        label: 'Email Address',
        id: 'email-input',
    },
};

export const Password: Story = {
    args: {
        type: 'password',
        placeholder: 'Enter password...',
        label: 'Password',
        id: 'password-input',
    },
};

export const Number: Story = {
    args: {
        type: 'number',
        placeholder: 'Enter a number...',
        label: 'Number Input',
        id: 'number-input',
    },
};

export const WithError: Story = {
    args: {
        type: 'email',
        placeholder: 'Enter your email...',
        label: 'Email Address',
        id: 'email-error',
        error: 'Please enter a valid email address',
        value: 'invalid-email',
    },
};

export const Disabled: Story = {
    args: {
        type: 'text',
        placeholder: 'This input is disabled',
        label: 'Disabled Input',
        id: 'disabled-input',
        disabled: true,
        value: 'Cannot edit this',
    },
};

export const WithoutLabel: Story = {
    args: {
        type: 'text',
        placeholder: 'Input without label...',
        id: 'no-label-input',
    },
};
