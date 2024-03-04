import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../default/ui/switch';

// Meta definition using satisfies
const meta: Meta<typeof Switch> = {
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;

// Infer Story type from meta
type Story = StoryObj<typeof meta>;

// Stories using satisfies
export const Default: Story = {
  args: {
    id: 'airplane-mode',
  },
  // render: (args) => (
  //   <div className="flex items-center space-x-2">
  //     <Switch {...args} />
  //     // <Label htmlFor="airplane-mode">Airplane Mode</Label>
  //   </div>
  // )
};
