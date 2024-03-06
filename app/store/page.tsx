import { Card } from "@/components/card";
import {
  Container,
  ContainerFlex,
  ContainerGrid,
  ContainerSubGrid,
  InputCheckbox,
  LabelInput,
  ListItem,
  Span,
  SpanContainer,
  SubTitle,
  Text,
  Title,
} from "./styles";
import { Header } from "@/components/header";
import { Pagination } from "@/components/pagination";

export default function Store() {
  return (
    <main>
      <Header />
      <Container>
        <ContainerGrid>
          <section>
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
          </section>

          <ContainerSubGrid>
            <Span>
              <SubTitle>49</SubTitle>
              <Text> produtos encontrados</Text>
            </Span>

            <Card />
          </ContainerSubGrid>
        </ContainerGrid>
        <Pagination />
      </Container>
    </main>
  );
}
