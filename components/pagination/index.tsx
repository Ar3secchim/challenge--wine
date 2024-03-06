"use client";
import { useState } from "react";
import { Button, ButtonPagination, Container, SVGElement } from "./style";

const VISIBLE_PAGES = 3;

export function Pagination({ totalPages = 10, setcurrentPage = 5 }) {
  const [currentPage, setCurrentPageState] = useState(0);

  const handleClick = (pageNumber: number) => {
    setCurrentPageState(pageNumber);
    setcurrentPage(pageNumber);
  };

  const renderPages = () => {
    const pages = [];
    const maxVisiblePages = Math.min(totalPages, VISIBLE_PAGES);

    const startIndex = Math.max(
      0,
      Math.min(
        currentPage - Math.floor(VISIBLE_PAGES / 2),
        totalPages - maxVisiblePages
      )
    );
    const endIndex = Math.min(startIndex + VISIBLE_PAGES - 1, totalPages - 1);

    for (let i = startIndex; i <= endIndex; i++) {
      pages.push(
        <ButtonPagination
          key={i}
          value={i}
          $className={
            currentPage === i
              ? "currentPage"
              : currentPage === i - 1
              ? "nextPage"
              : ""
          }
          onClick={(e) => handleClick(Number(e.target.value))}
        >
          {i + 1}
        </ButtonPagination>
      );
    }
    return pages;
  };

  const handleNext = () => {
    const nextPage = Math.min(totalPages - 1, currentPage + 1);
    setCurrentPageState(nextPage);
    setCurrentPage(nextPage);
  };

  return (
    <Container>
      {renderPages()}

      <Button onClick={handleNext} disabled={currentPage === totalPages - 1}>
        <span>
          {currentPage === totalPages - 2 || currentPage === totalPages - 1
            ? ""
            : "... "}
        </span>
        Próximo
        {[...Array(2)].map((_, index) => (
          <SVGElement
            key={index}
            $className={currentPage === totalPages - 1 ? "disabled" : ""}
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
    </Container>
  );
}
