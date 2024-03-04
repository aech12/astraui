import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '../default/ui/avatar';

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
    // render: (args) => (
    //     <Avatar {...args}>
    //         <AvatarImage src={"https://placekitten.com/100/100"}></AlertTitle>
    //     </Avatar>
    // ),
} satisfies Story;

export const WithFallback = {
//   render: (args) => (
//     <Avatar {...args}>
//         <AvatarImage src={"https://placekitten.com/100/100"}></AlertTitle>
//         <AvatarFallback>CN</AlertDescription>
//     </Avatar>
// ),
} satisfies Story;
