import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '../ui/tooltip';

// Meta definition using satisfies
const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

// Infer Story type from meta
type Story = StoryObj<typeof meta>;

// Stories using satisfies
export const Basic: Story = {
  components: { TooltipProvider, TooltipTrigger, TooltipContent },
  argTypes: {
    content: { control: { type: 'text' } },
    side: { control: { type: 'select', options: ['top', 'right', 'bottom', 'left'] } },
  },
  template: (args) => (
    <TooltipProvider>
      <TooltipTrigger>
        Hover me for a tooltip!
      </TooltipTrigger>
      <TooltipContent side={args.side}>{args.content}</TooltipContent>
    </TooltipProvider>
  ),
};

// ... other stories
