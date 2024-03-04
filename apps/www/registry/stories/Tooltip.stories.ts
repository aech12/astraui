import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '../default/ui/tooltip';

// Meta definition using satisfies
const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;

// Infer Story type from meta
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  // render: (args) => (
  //   <TooltipProvider>
  //     <Tooltip>
  //       <TooltipTrigger asChild>
  //         // <Button variant="outline">Hover</Button>
  //       </TooltipTrigger>
  //       <TooltipContent>
  //         <p>Add to library</p>
  //       </TooltipContent>
  //     </Tooltip>
  //   </TooltipProvider>
  // ),
};
