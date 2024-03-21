import { Filter } from "@/components/filter";
import { Header } from "@/components/header";
import { Pagination } from "@/components/pagination";
import { SearchBar } from "@/components/searchBar";
import { Card } from "@/ui/card";
import {
  Button,
  Container,
  ContainerFlex,
  ContainerSubGrid,
  Span,
  SpanProduts,
  SubTitle,
  Text,
  Title,
  ToogleListContainer,
} from "./styles";

import { searchParamsProps } from "@/types/searchParams";
import { Suspense } from "react";
import { getAllProducts } from "../api/products/getAllProduts";
import { getProductsQuery } from "../api/products/getProductsQuery";
import { getPageProducts } from "../api/products/getProdutsPage";
import { Frown } from "lucide-react";

const ranges = [
  [
    { min: 0, max: 40, label: "até R$ 40" },
    { min: 40, max: 60, label: "R$ 40 a R$ 60" },
    { min: 60, max: 100, label: "R$ 60 a R$ 100" },
    { min: 100, max: 200, label: "R$ 100 a R$ 200" },
    { min: 200, max: 500, label: "R$ 100 a R$ 500" },
    { min: 500, max: Infinity, label: "acima de R$ 500" },
  ],
];

export default async function Store({ searchParams }: searchParamsProps) {
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

      <Container>
        <ToogleListContainer>
          <Title>Refine sua busca</Title>
          <SubTitle>Por preço</SubTitle>

          <ContainerFlex>
            <Filter />
          </ContainerFlex>
        </ToogleListContainer>

        <ContainerFlex>
          {totalItems == 0 ? (
            ""
          ) : (
            <Span>
              <SubTitle>{totalItems}</SubTitle>
              <Text> produtos encontrados</Text>
            </Span>
          )}

          <ContainerSubGrid>
            <Suspense fallback={<div>Loading...</div>}>
              {listData.map((details) => {
                return <Card key={details.id} {...details} />;
              })}
            </Suspense>
          </ContainerSubGrid>

          {totalItems == 0 ? (
            <SubTitle>
              <Frown />
              Nenhum produto foi encontrado
            </SubTitle>
          ) : (
            <Pagination totalItems={totalItems} {...searchParams} />
          )}

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
