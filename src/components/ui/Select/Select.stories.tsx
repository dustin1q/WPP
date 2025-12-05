import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
    title: 'UI/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' },
        placeholder: { control: 'text' },
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const rocketOptions = [
    { value: 'Falcon 9', label: 'Falcon 9' },
    { value: 'Falcon Heavy', label: 'Falcon Heavy' },
    { value: 'Starship', label: 'Starship' },
    { value: 'Saturn V', label: 'Saturn V' },
    { value: 'Apollo 11', label: 'Apollo 11' },
];

export const Default: Story = {
    args: {
        options: rocketOptions,
        placeholder: 'Select a rocket...',
    },
};

export const WithValue: Story = {
    args: {
        options: rocketOptions,
        value: 'Falcon 9',
    },
};

export const Disabled: Story = {
    args: {
        options: rocketOptions,
        placeholder: 'Select a rocket...',
        disabled: true,
    },
};

export const ManyOptions: Story = {
    args: {
        options: [
            ...rocketOptions,
            { value: 'Apollo 12', label: 'Apollo 12' },
            { value: 'Apollo 13', label: 'Apollo 13' },
            { value: 'Apollo 14', label: 'Apollo 14' },
            { value: 'Apollo 15', label: 'Apollo 15' },
            { value: 'Apollo 16', label: 'Apollo 16' },
            { value: 'Apollo 17', label: 'Apollo 17' },
        ],
        placeholder: 'Choose your favorite Apollo mission and rocket...',
    },
};
