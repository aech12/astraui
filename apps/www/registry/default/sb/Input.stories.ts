import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../ui/input';

// main export
const meta = {
  component: Input,
  tags: ['autodocs'],
  // argTypes: {
  //   type: { control: { type: 'select', options: ['text', 'email', 'password'] } },
  //   className: { control: { type: 'text' } },
  // },
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof meta>;

// other examples
export const Basic = {
  args: {
    type: 'text',
  },
} satisfies Story;

export const Email = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
} satisfies Story;

export const Password = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
} satisfies Story;

export const CustomClass = {
  args: {
    type: 'text',
    className: 'custom-class',
  },
} satisfies Story;
