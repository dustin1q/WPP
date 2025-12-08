import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { useState } from 'react';

const meta = {
    title: 'UI/Radio',
    component: Radio,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
    args: {
        label: 'Option 1',
        checked: false,
        name: 'example',
        value: 'option1',
    },
};

export const Checked: Story = {
    args: {
        label: 'Option 1',
        checked: true,
        name: 'example',
        value: 'option1',
    },
};

export const Disabled: Story = {
    args: {
        label: 'This radio is disabled',
        disabled: true,
        checked: false,
        name: 'example',
        value: 'disabled',
    },
};

export const DisabledChecked: Story = {
    args: {
        label: 'This radio is disabled and checked',
        disabled: true,
        checked: true,
        name: 'example',
        value: 'disabled-checked',
    },
};

export const WithoutLabel: Story = {
    args: {
        checked: false,
        name: 'example',
        value: 'no-label',
    },
};

export const LongLabel: Story = {
    args: {
        label: 'I agree to the terms and conditions, privacy policy, and all other legal documents associated with this service',
        checked: false,
        name: 'example',
        value: 'long',
    },
};

// Radio Group Example
export const RadioGroup: Story = {
    render: () => {
        const [selected, setSelected] = useState('option1');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Radio
                    label="Option 1"
                    name="group"
                    value="option1"
                    checked={selected === 'option1'}
                    onChange={() => setSelected('option1')}
                />
                <Radio
                    label="Option 2"
                    name="group"
                    value="option2"
                    checked={selected === 'option2'}
                    onChange={() => setSelected('option2')}
                />
                <Radio
                    label="Option 3"
                    name="group"
                    value="option3"
                    checked={selected === 'option3'}
                    onChange={() => setSelected('option3')}
                />
                <Radio
                    label="Disabled Option"
                    name="group"
                    value="option4"
                    checked={selected === 'option4'}
                    onChange={() => setSelected('option4')}
                    disabled
                />
            </div>
        );
    },
};
