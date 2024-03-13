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
import { Card } from "@/ui/card";
import { Header } from "@/components/header";
import { Pagination } from "@/components/pagination";
import { Filter } from "@/components/filter";
import { SearchBar } from "@/components/searchBar";

import { Suspense } from "react";
import { getPageProducts } from "../api/products/getProdutsPage";
import { getProductsQuery } from "../api/products/getProductsQuery";
import { getAllProducts } from "../api/products/getAllProduts";

type PageProps = {
  searchParams: {
    page?: string;
    perPage?: string;
    name?: string;
    price?: string;
  };
};

export default async function Store({ searchParams }: PageProps) {
  let page = Number(searchParams?.page) || 1;
  let limit = Number(searchParams?.perPage) || 9;
  let query = searchParams || "";

  const { data, metaData } = await getPageProducts(page, limit);
  let listData = data;
  let totalItems = metaData.totalItems.length;

  if (query.price) {
    const { results, resultLength } = await getProductsQuery(query.price);
    listData = results;
    totalItems = resultLength;
  }

  if (query.name) {
    const results = await getAllProducts();
    listData = results.filter((products) =>
      products.name.toLowerCase().includes(query.name.trim().toLowerCase())
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
            <Filter />
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

          <Pagination totalItems={totalItems} {...searchParams} />

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
