import type { Meta, StoryObj } from '@storybook/react'; // Assuming React renderer
import { Button, buttonVariants } from '../default/ui/button';

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
    children: "Button",
    variant: 'default',
    size: 'default',
  },
} satisfies Story;

export const Destructive = {
  args: {
    children: "Button",
    variant: 'destructive',
  },
} satisfies Story;

export const Ghost = {
  args: {
    children: "Button",
    variant: 'ghost',
  },
} satisfies Story;

// export const Icon = {
//   args: {
//     children: "Icon",
//     variant: 'outline',
//     size: "icon"
//   },
// } satisfies Story;

export const Link = {
  args: {
    children: "Button",
    variant: 'link',
  },
} satisfies Story;

export const Loading = {
  args: {
    children: "Spinner",
    disabled: true,
  },
} satisfies Story;

export const Outline = {
  args: {
    children: "Button",
    variant: 'outline',
  },
} satisfies Story;

export const Secondary = {
  args: {
    children: "Button",
    variant: 'secondary',
  },
} satisfies Story;

// export const WithIcon = {
//   args: {
//     children: "Button",
//     variant: 'destructive',
//   },
// } satisfies Story;