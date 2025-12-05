import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
    title: 'UI/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        defaultOpen: { control: 'boolean' },
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        summary: 'Click to expand',
        children: 'This is the content that appears when you expand the accordion.',
    },
};

export const OpenByDefault: Story = {
    args: {
        summary: 'This is open by default',
        defaultOpen: true,
        children: 'This content is visible immediately because defaultOpen is true.',
    },
};

export const WithRichContent: Story = {
    args: {
        summary: 'View detailed information',
        children: (
            <div>
                <h4 style={{ marginTop: 0 }}>Rich Content Example</h4>
                <p>This accordion component can contain any React content:</p>
                <ul>
                    <li>Lists</li>
                    <li>Images</li>
                    <li>Other components</li>
                    <li>Formatted text</li>
                </ul>
                <p style={{ marginBottom: 0 }}>
                    <strong>Note:</strong> The expand/collapse animation is smooth and accessible.
                </p>
            </div>
        ),
    },
};

export const FAQ: Story = {
    args: {
        summary: 'What is an Accordion component?',
        children: (
            <div>
                <p>
                    The Accordion component is a native HTML details element that provides an interactive
                    disclosure widget. Users can click on the summary to reveal or hide additional
                    content.
                </p>
                <p style={{ marginBottom: 0 }}>
                    It's commonly used for FAQs, accordion menus, and collapsible sections.
                </p>
            </div>
        ),
    },
};

export const LongContent: Story = {
    args: {
        summary: 'Read the full article',
        children: (
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p style={{ marginBottom: 0 }}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>
        ),
    },
};
