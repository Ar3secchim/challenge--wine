import { Button, ButtonPagination, Container, SVGElement } from "./style";
import Link from "next/link";
import { usePagination } from "./hook/usePagination";

type PaginationProps = {
  page: number;
  total: number;
  limit: number;
};

export function Pagination({ page, limit, total }: PaginationProps) {
  const { pages, isCurrentPage, totalPages } = usePagination({
    page,
    limit,
    total,
  });

  console.log(pages);
  return (
    <Container>
      {pages.map((page) => (
        <Link key={page} href={`?_page=${page}`}>
          <ButtonPagination
            key={page}
            $className={page == page ? "currentPage" : ""}
          >
            {page}
          </ButtonPagination>
        </Link>
      ))}

      <Link key={page} href={`?_page=${page}`}>
        <Button>
          <span>
            {page === totalPages - 2 || page === totalPages - 1 ? "" : "... "}
          </span>
          Próximo
          {[...Array(2)].map((_, index) => (
            <SVGElement
              key={index}
              $className={page === totalPages - 1 ? "disabled" : ""}
              width="9"
              height="15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="arrow 2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.000435591 14.4837C0.000435591 14.3412 0.0598118 14.1998 0.176479 14.0976L7.70155 7.49948L0.176479 0.902402C-0.0401895 0.712439 -0.0599813 0.385166 0.131687 0.174555C0.322314 -0.0391535 0.650442 -0.0598016 0.866069 0.130161L8.83281 7.11336C9.05573 7.30952 9.05573 7.69048 8.83281 7.8856L0.866069 14.8698C0.650442 15.0598 0.322314 15.0392 0.131687 14.8254C0.0431449 14.7274 0.000435591 14.6055 0.000435591 14.4837Z"
              />
            </SVGElement>
          ))}
        </Button>
      </Link>
    </Container>
  );
}
