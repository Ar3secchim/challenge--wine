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
import { FilterList } from "@/ui/filterList";

import { Suspense } from "react";
import { getPageProducts } from "../api/products/getProdutsPage";
import { SearchBar } from "@/components/searchBar";
import { useParams } from "next/navigation";
import { getProductsName } from "../api/products/getProdutsName";
import { Filter } from "@/components/filter";

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
  let query = searchParams?.name || searchParams?.price || "";

  const { data, metaData } = await getPageProducts(page, limit);
  let listData = data;
  let totalItems = metaData.totalItems.length;

  if (query) {
    const { results, totalListItems } = await getProductsName(query);
    listData = results;
    totalItems = totalListItems;
  }

  return (
    <main>
      <Header />
      {/* <SearchBar /> */}

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

          {!query && <Pagination totalItems={totalItems} {...searchParams} />}

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
