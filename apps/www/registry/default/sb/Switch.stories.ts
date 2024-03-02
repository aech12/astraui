import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../ui/switch';

// Meta definition using satisfies
const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

// Infer Story type from meta
type Story = StoryObj<typeof meta>;

// Stories using satisfies
export const Default: Story = {
  props: {
    defaultChecked: false,
  },
};

export const Checked: Story = {
  props: {
    defaultChecked: true,
  },
};

// ... other stories
