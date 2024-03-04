import type { Meta, StoryObj } from '@storybook/react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '../default/ui/pagination';

// Meta definition using satisfies
const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;

// Infer Story type from meta
type Story = StoryObj<typeof meta>;

// Stories using satisfies
export const Basic: Story = {
  // render: (args) => (
  //   <Pagination>
  //     <PaginationContent>
  //       <PaginationItem>
  //         {/* Use template for conditional rendering based on state */}
  //         {args.currentPage > 1 && <PaginationPrevious />}
  //       </PaginationItem>
  //       {[...Array(Math.min(args.totalPages, 5))].map((_, index) => (
  //         <PaginationItem key={index}>
  //           <PaginationLink isActive={index + 1 === args.currentPage}>
  //             {index + 1}
  //           </PaginationLink>
  //         </PaginationItem>
  //       ))}
  //       {args.totalPages > 5 && (
  //         <>
  //           <PaginationEllipsis />
  //           <PaginationItem>
  //             <PaginationLink>{args.totalPages}</PaginationLink>
  //           </PaginationItem>
  //         </>
  //       )}
  //       <PaginationItem>
  //         {/* Use template for conditional rendering based on state */}
  //         {args.currentPage < args.totalPages && <PaginationNext />}
  //       </PaginationItem>
  //     </PaginationContent>
  //   </Pagination>
  // ),
};
