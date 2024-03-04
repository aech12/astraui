import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../default/ui/checkbox';

// Meta definition using satisfies
const meta = {
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

// Infer Story type from meta
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    id: "checkbox"
  }
} satisfies Story;

export const Disabled = {
  args: {
    id: "checkbox",
    disabled: true
  }
} satisfies Story;

