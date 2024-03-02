import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

// Meta definition using satisfies
const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

// Infer Story type from meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (<Tabs>
    <TabsList>{ args.children } < /TabsList>
    < TabsContent />
    </Tabs>)
};