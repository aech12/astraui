import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';

// Meta definition using satisfies
const meta = {
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;

// Infer Story type from meta
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const WithImage = {
  args: {
    src: "https://placekitten.com/100/100",
    alt: "Avatar"
  }
} satisfies Story;

export const WithFallback = {
  args: {
    initials: "JD"
  }
} satisfies Story;
