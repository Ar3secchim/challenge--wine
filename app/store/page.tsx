import { Card } from "@/components/card";
import {
  Container,
  ContainerFlex,
  ContainerSubGrid,
  InputCheckbox,
  LabelInput,
  ListItem,
  Span,
  SpanContainer,
  SpanProduts,
  SubTitle,
  Text,
  Title,
  ToogleList,
  Button
} from "./styles";
import { Header } from "@/components/header";
import { Pagination } from "@/components/pagination";
import { getAllProducts } from "../api/products/getAllProduts";

import { NextApiRequest, NextApiResponse } from "next";
import { Products } from "@/types/products";

type Context = {
  req: NextApiRequest;
  res: NextApiResponse<Products[]>;
};

async function getData() {
  const products = await getAllProducts();
  return products;
}

export default async function Store() {
  const produtos = await getData();
  return (
    <main>
      <Header />
      <Container>
        <ToogleList>
          <Title>Refine sua busca</Title>
          <SubTitle>Por preço</SubTitle>

          <ContainerFlex>
            <ListItem>
              <LabelInput htmlFor="check">
                <InputCheckbox type="checkbox" id="check" />

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

              <LabelInput htmlFor="check">Até R$40 </LabelInput>
            </ListItem>
          </ContainerFlex>
        </ToogleList>

        <ContainerFlex>
          <Span>
            <SubTitle>{produtos?.length}</SubTitle>
            <Text> produtos encontrados</Text>
          </Span>
          <ContainerSubGrid>
            {!produtos && <p>Not found</p>}
            {produtos?.map((p) => {
              return <Card key={p.id} {...p} />;
            })}
          </ContainerSubGrid>
          <Pagination />

          <Button type="button">Mostrar mais</Button>

          <SpanProduts>
            <Text> Exibindo</Text>
            <SubTitle>{produtos?.length}</SubTitle>
            <Text> de </Text>
            <SubTitle>{produtos?.length}</SubTitle>
            <Text> produtos no total</Text>
          </SpanProduts>
        </ContainerFlex>
      </Container>
    </main>
  );
}
