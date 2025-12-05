import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
    title: 'UI/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
    args: {
        label: 'Accept terms and conditions',
        checked: false,
    },
};

export const Checked: Story = {
    args: {
        label: 'Accept terms and conditions',
        checked: true,
    },
};

export const Disabled: Story = {
    args: {
        label: 'This checkbox is disabled',
        disabled: true,
        checked: false,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: 'This checkbox is disabled and checked',
        disabled: true,
        checked: true,
    },
};

export const WithoutLabel: Story = {
    args: {
        checked: false,
    },
};

export const LongLabel: Story = {
    args: {
        label: 'I agree to the terms and conditions, privacy policy, and all other legal documents associated with this service',
        checked: false,
    },
};
