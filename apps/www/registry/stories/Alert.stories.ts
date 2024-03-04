import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '../default/ui/alert';
import { FormDescription } from '../new-york/ui/form';

// Meta definition using satisfies
const meta: Meta<typeof Alert> = {
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;

// Infer Story type from meta
type Story = StoryObj<typeof meta>;

// export const Default = {
//   render: (args) => (
//     <Alert {...args}>
//       <AlertTitle>Title</AlertTitle>
//       <AlertDescription>Description</AlertDescription>
//     </Alert>
//   ),
// } satisfies Story;

export const Empty = {} satisfies Story;

export const Destructive = {
  args: {
    variant: "destructive"
  },
  // render: () => {
  //   return <div>hi</div>
  // }
  // render: (args) => (
  //   <Alert {...args}>
  //     <AlertTitle>Error</AlertTitle>
  //     <AlertDescription>Description</AlertDescription>
  //   </Alert>
  // ),
} satisfies Story;
