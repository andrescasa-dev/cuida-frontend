import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

function CustomPagination() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem className="flex justify-center">
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem className="flex justify-center">
          <PaginationLink className="max-w-none" href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="flex justify-center">
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem className="flex justify-center">
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="flex justify-center">
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default CustomPagination;
