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
              {totalItems == 0 && (
                <SubTitle>
                  <Frown />
                  Nenhum produto foi encontrado
                </SubTitle>
              )}
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
