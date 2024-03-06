import { Card } from "@/components/card";
import {
  Container,
  ContainerFlex,
  ContainerGrid,
  ContainerSubGrid,
  ListItem,
  Span,
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
                <input type="checkbox" />
                Até R$40
              </ListItem>
              <ListItem>
                <input type="checkbox" />
                R$40 A R$60
              </ListItem>
              <ListItem>
                <input type="checkbox" />
                R$100 A R$200
              </ListItem>
              <ListItem>
                <input type="checkbox" />
                R$200 A R$500
              </ListItem>
              <ListItem>
                <input type="checkbox" />
                Acima de R$500
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
