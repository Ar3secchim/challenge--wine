"use client";
import { searchParamsProps } from "@/types/searchParams";
import { usePathname, useRouter } from "next/navigation";
import { KeyboardEvent } from "react";
import { Button } from "../ui/button";
import { Container, ContainerInput, Input } from "./style";

export function SearchBar() {
  const pathname = usePathname();
  const { push } = useRouter();

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch(event.target.value);
    }
  };

  function handleSearch(term: string) {
    const params = new URLSearchParams();
    if (term) {
      params.set("name", term);
    } else {
      params.delete("name");
    }

    push(`${pathname}?${params.toString()}`);
  }

  return (
    <Container>
      <ContainerInput>
        <Input type="text" placeholder="Pesquisar" onKeyDown={handleKeyDown} />

        <Button link={true}>
          aperte enter para buscar
          <svg
            width="46"
            height="46"
            viewBox="0 0 76 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.042 13.7474C18.3581 13.7474 13.7503 18.3551 13.7503 24.0391C13.7503 29.723 18.3581 34.3307 24.042 34.3307C29.7259 34.3307 34.3337 29.723 34.3337 24.0391C34.3337 18.3551 29.7259 13.7474 24.042 13.7474ZM12.167 24.0391C12.167 17.4807 17.4836 12.1641 24.042 12.1641C30.6004 12.1641 35.917 17.4807 35.917 24.0391C35.917 27.034 34.8083 29.77 32.9789 31.8589L43.5991 42.4791C43.9082 42.7882 43.9082 43.2895 43.5991 43.5987C43.2899 43.9078 42.7887 43.9078 42.4795 43.5987L31.8592 32.9784C29.7705 34.8063 27.0356 35.9141 24.042 35.9141C17.4836 35.9141 12.167 30.5974 12.167 24.0391Z"
              fill="#D14B8F"
            />
          </svg>
        </Button>
      </ContainerInput>
    </Container>
  );
}
