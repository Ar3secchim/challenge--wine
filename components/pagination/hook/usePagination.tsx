type usePaginationProps = {
  page: number;
  total: number;
  limit: number;
};

function generatePages(page: number, totalPages: number) {
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }
  return pages;
}

export function usePagination({ page, limit, total }: usePaginationProps) {
  const totalPages = Math.ceil(total / limit);
  const pages = generatePages(page, totalPages);
  const isCurrentPage = (n: number) => n == page;

  return {
    isCurrentPage,
    totalPages,
    pages,
  };
}
