'use client';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { cn, generatePagination } from '@/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

function CustomPagination({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const currentPage = Number(searchParams.get('currentPage'));
  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (page: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('currentPage', page.toString());
    return `${pathName}?${params}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(currentPage > 1 ? currentPage - 1 : currentPage)}
          />
        </PaginationItem>

        {allPages.map((page) => {
          return (
            <PaginationNumber
              key={page}
              href={createPageURL(page)}
              page={page}
              isActive={currentPage === page}
            />
          );
        })}

        <PaginationItem className="flex justify-center">
          <PaginationNext
            href={createPageURL(currentPage < totalPages ? currentPage + 1 : currentPage)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
}: {
  page: number | string;
  href: string;
  isActive: boolean;
}) {
  return (
    <PaginationItem className="flex justify-center">
      <PaginationLink
        className={cn('max-w-none', { 'bg-muted': isActive })}
        href={href}
        isActive
      >
        {page}
      </PaginationLink>
    </PaginationItem>
  );
}

export default CustomPagination;
