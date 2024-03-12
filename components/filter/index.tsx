"use client";
import { use } from "react";
import { FilterList } from "../ui/filterList";
import {
  InputCheckbox,
  LabelInput,
  SpanContainer,
  ListItem,
} from "@/ui/filterList/styles";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ranges = [
  { min: 0, max: 40, label: "até R$ 40" },
  { min: 40, max: 60, label: "R$ 40 a R$ 60" },
  { min: 60, max: 100, label: "R$ 60 a R$ 100" },
  { min: 100, max: 200, label: "R$ 100 a R$ 200" },
  { min: 200, max: 500, label: "R$ 100 a R$ 500" },
  { min: 500, max: Infinity, label: "acima de R$ 500" },
];

interface RangesList {
  key: number;
  min: number;
  max: number;
  label: string;
}

export function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleFilter(term) {
    const params = new URLSearchParams();
    const minPrice = term.min.toString();
    const maxPrice = term.max.toString();
    const query = `{_gt=${minPrice}&price_lt=${maxPrice}}`;

    if (term) {
      params.set("price", query);
    } else {
      params.delete("price");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      {ranges.map((range, i) => (
        <ListItem key={i}>
          <LabelInput htmlFor={`check-${range.min}`}>
            <InputCheckbox
              type="checkbox"
              id={`check-${range.min}`}
              onChange={() =>
                handleFilter({
                  min: `${range.min}`,
                  max: `${range.max}`,
                })
              }
            />
            <SpanContainer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                width="16"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </SpanContainer>
          </LabelInput>
          <LabelInput htmlFor={`check-${range.min}`}>{range.label}</LabelInput>
        </ListItem>
      ))}
    </>
  );
}
