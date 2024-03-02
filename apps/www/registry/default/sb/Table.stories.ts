import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '../ui/table';

// Meta definition using satisfies
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

// Infer Story type from meta
type Story = StoryObj<typeof meta>;

// Stories using satisfies
export const Basic: Story = {
  components: {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
  },
  template: (args) => (
    <Table>
      <TableCaption>Table Caption</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Column 1</TableHead>
          <TableHead>Column 2</TableHead>
          <TableHead>Column 3</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1.1</TableCell>
          <TableCell>Cell 1.2</TableCell>
          <TableCell>Cell 1.3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 2.1</TableCell>
          <TableCell>Cell 2.2</TableCell>
          <TableCell>Cell 2.3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 3.1</TableCell>
          <TableCell>Cell 3.2</TableCell>
          <TableCell>Cell 3.3</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Table Footer</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

// ... other stories
