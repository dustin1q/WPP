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

const fruitOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
    { value: 'mango', label: 'Mango' },
];

export const Default: Story = {
    args: {
        options: fruitOptions,
        placeholder: 'Select a fruit...',
    },
};

export const WithValue: Story = {
    args: {
        options: fruitOptions,
        value: 'banana',
    },
};

export const Disabled: Story = {
    args: {
        options: fruitOptions,
        placeholder: 'Select a fruit...',
        disabled: true,
    },
};

export const ManyOptions: Story = {
    args: {
        options: [
            ...fruitOptions,
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'blueberry', label: 'Blueberry' },
            { value: 'raspberry', label: 'Raspberry' },
            { value: 'watermelon', label: 'Watermelon' },
            { value: 'pineapple', label: 'Pineapple' },
            { value: 'kiwi', label: 'Kiwi' },
            { value: 'peach', label: 'Peach' },
            { value: 'pear', label: 'Pear' },
        ],
        placeholder: 'Choose your favorite fruit...',
    },
};
