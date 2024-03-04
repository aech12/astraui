import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../default/ui/input';

// main export
const meta = {
  component: Input,
  tags: ['autodocs'],
  // argTypes: {
  //   type: { control: { type: 'select', options: ['text', 'email', 'password'] } },
  //   className: { control: { type: 'text' } },
  // },
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof meta>;

// other examples
export const Basic = {
  args: {
    type: 'text',
  },
} satisfies Story;

export const Email = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
} satisfies Story;

export const Password = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
    type: 'email',
    placeholder: 'Enter your email',
  },
} satisfies Story;

export const File = {
  args: {
    id: 'picture',
    type: 'file',
  },
} satisfies Story;

// export const WithButton = {
//   args: {
//     type: 'text',
//   },
//     render: (args) => (
//       <div {...args}>
//         <Input>Title</AlertTitle>
//         <button>Accept</button>
//       </div>
//     ),
// } satisfies Story;

// export const WithLabel = {
//   args: {
//     type: 'email',
//     id: 'email',
//     placeholder: 'Email',
//   },
//     render: (args) => (
//       <div>  
            // <Label htmlFor="email">Email</Label>
            // <Input {...args} />
//       </div>
//     ),
// } satisfies Story;

// export const WithText = {
//   args: {
//     type: 'email',
//     id: 'email',
//     placeholder: 'Email',
//   },
//     render: (args) => (
//       <div>  
            // <Label htmlFor="email">Email</Label>
            // <Input {...args} />
      // <p className="text-sm text-muted-foreground">Enter your email address.</p>
      //       </div>
//     ),
// } satisfies Story;
