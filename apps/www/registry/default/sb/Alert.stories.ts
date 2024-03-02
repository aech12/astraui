import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';

// Meta definition using satisfies
const meta: Meta<typeof Alert> = {
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;

// Infer Story type from meta
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Destructive = {
  args: {
    variant: "destructive"
  }
} satisfies Story;

export const WithTitleAndDescription = {
  args: {
    variant: "default",
    title: "This is a title"
  }
} satisfies Story;

