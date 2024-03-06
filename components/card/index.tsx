import Image from "next/image";
import Selo from "@/assets/imgs/selo.svg";
import Wine from "@/assets/imgs/Rectangle.png";
import { Container, ContainerCard, Title } from "./styles";
import { Button } from "../button";

export function Card() {
  return (
    <Container>
      <ContainerCard>
        <div>
          <Image src={Wine} alt="selo da black wine " />
          <Image
            className="translate-x-40 -translate-y-10"
            src={Selo}
            alt="selo da black wine "
          />
        </div>
        <Title>Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014</Title>
        <p>
          preço off <span>Tag</span>
        </p>
        <p>Socio wine</p>
        <p>Não Socio wine</p>
      </ContainerCard>
      <Button primary={true}>ADICIONAR</Button>
    </Container>
  );
}
