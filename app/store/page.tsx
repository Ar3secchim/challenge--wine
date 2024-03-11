"use server";
import {
  Container,
  ContainerFlex,
  ContainerSubGrid,
  Span,
  SpanProduts,
  SubTitle,
  Text,
  Title,
  ToogleListContainer,
  Button,
} from "./styles";
import { Card } from "@/components/card";
import { Header } from "@/components/header";
import { Pagination } from "@/components/pagination";
import { PriceRangeList } from "@/components/priceRangeList";

import { Suspense } from "react";
import { getPageProducts } from "../api/products/getProdutsPage";
import { SearchBar } from "@/components/searchBar";

type PageProps = {
  searchParams: { page?: string; perPage?: string; query?: string };
};

const ranges = [
  { min: 0, max: 40, label: "até R$ 40" },
  { min: 40, max: 60, label: "R$ 40 a R$ 60" },
  { min: 60, max: 100, label: "R$ 60 a R$ 100" },
  { min: 100, max: 200, label: "R$ 100 a R$ 200" },
  { min: 200, max: 500, label: "R$ 100 a R$ 500" },
  { min: 500, max: Infinity, label: "acima de R$ 500" },
];

export default async function Store({ searchParams }: PageProps) {
  let page = Number(searchParams?.page) || 1;
  let limit = Number(searchParams?.perPage) || 9;
  let query = searchParams?.query || "";

  const { data, metaData } = await getPageProducts(page, limit);
  let listData = data;
  let totalItems = metaData.totalItems.length;

  if (query) {
    listData = metaData.totalItems.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    totalItems = listData.length;
  }

  return (
    <main>
      <Header />
      <SearchBar />

      <Container>
        <ToogleListContainer>
          <Title>Refine sua busca</Title>
          <SubTitle>Por preço</SubTitle>

          <ContainerFlex>
            {ranges.map((range) => (
              <PriceRangeList key={range.min} range={range} />
            ))}
          </ContainerFlex>
        </ToogleListContainer>

        <ContainerFlex>
          <Span>
            <SubTitle>{totalItems}</SubTitle>
            <Text> produtos encontrados</Text>
          </Span>
          <ContainerSubGrid>
            <Suspense fallback={<div>Loading...</div>}>
              {listData.map((details) => {
                return <Card key={details.id} {...details} />;
              })}
            </Suspense>
          </ContainerSubGrid>
          
          <Pagination limit={limit} page={page} total={totalItems} />

          <Button type="button">Mostrar mais</Button>

          <SpanProduts>
            <Text> Exibindo</Text>
            <SubTitle>{data?.length}</SubTitle>
            <Text> de </Text>
            <SubTitle>{data?.length}</SubTitle>
            <Text> produtos no total</Text>
          </SpanProduts>
        </ContainerFlex>
      </Container>
    </main>
  );
}
