import type { Meta, StoryObj } from '@storybook/react';
import {
  Menubar,
  MenubarItem,
  MenubarTrigger,
  MenubarSubTrigger,
  MenubarContent,
  MenubarSubContent,
  MenubarLabel,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarShortcut,
} from '../ui/menubar';

// Meta definition using satisfies
const meta: Meta<typeof Menubar> = {
  title: 'Components/Menubar',
  component: Menubar,
} satisfies Meta<typeof Menubar>;

export default meta;

// Infer Story type from meta
type Story = StoryObj<typeof meta>;

// Stories using satisfies
export const Basic: Story = {
  components: {
    Menubar,
    MenubarItem,
    MenubarTrigger,
    MenubarSubTrigger,
    MenubarContent,
    MenubarSubContent,
    MenubarLabel,
    MenubarSeparator,
    MenubarCheckboxItem,
    MenubarShortcut,
  },
  template: (args) => (
    <Menubar>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent sideOffset={8}>
        <MenubarItem>New</MenubarItem>
        <MenubarItem>Open...</MenubarItem>
        <MenubarSeparator />
        <MenubarLabel>Save</MenubarLabel>
        <MenubarItem disabled>Save As...</MenubarItem>
        <MenubarSubTrigger inset>Close</MenubarSubTrigger>
        <MenubarSubContent side="right">
          <MenubarCheckboxItem checked>Auto-save</MenubarCheckboxItem>
          <MenubarCheckboxItem>Remember last opened file</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem as="button">Preferences...</MenubarItem>
        </MenubarSubContent>
      </MenubarContent>
      <MenubarShortcut>⌘N</MenubarShortcut>
    </Menubar>
  ),
};

// ... other stories
