import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../ui/checkbox';

// Meta definition using satisfies
const meta = {
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

// Infer Story type from meta
type Story = StoryObj<typeof meta>;

// Story using satisfies
export const Default = {} satisfies Story;
