import type { Meta, StoryObj } from '@storybook/react'; // Assuming React renderer
import { Button, buttonVariants } from '../ui/button';

// Meta definition using satisfies
const meta = {
  component: Button,
  tags: ['autodocs'],
  // argTypes: {
    // variant: {
    //   control: { type: 'select', options: Object.keys(buttonVariants.variants.variant) },
    // },
    // size: {
    //   control: { type: 'select', options: Object.keys(buttonVariants.variants.size) },
    // },
    // asChild: { control: { type: 'boolean' } },
  // },
} satisfies Meta<typeof Button>;

export default meta;

// Infer Story type from meta
type Story = StoryObj<typeof meta>;

// Stories using satisfies
export const Primary = {
  args: {
    variant: 'default',
    size: 'default',
  },
} satisfies Story;

export const Destructive = {
  args: {
    variant: 'destructive',
  },
} satisfies Story;

// ... other stories
