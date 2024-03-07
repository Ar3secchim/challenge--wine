import Image from "next/image";
import Selo from "@/assets/imgs/selo.svg";
import Wine from "@/assets/imgs/Rectangle.png";
import {
  Container,
  ContainerCard,
  ContainerFlex,
  Tag,
  Title,
  Text,
  TextPriceSocio,
  TextPriceUnderline,
  TextPrice,
  TextPriceSocioBase,
} from "./styles";
import { Button } from "../button";
import { Products } from "@/types/products";
import { calculatePricePromotion } from "@/utils/calculatePricePromotion";
import { formatStringInPrice } from "@/utils/formatStringInPrice";

export function Card({
  name,
  price,
  promotion,
  discount_for_members,
}: Products) {
  const priceNotSocio = calculatePricePromotion(price, promotion);

  const descontSocio = promotion + discount_for_members;
  const priceSocio = calculatePricePromotion(price, descontSocio);
  const textSocio = formatStringInPrice(priceSocio);

  return (
    <Container>
      <ContainerCard>
        <div>
          <Image width={180} src={Wine} alt="selo da black wine " />
          <Image
            className="translate-x-40 -translate-y-10"
            src={Selo}
            alt="selo da black wine "
          />
        </div>
        <Title>{name}</Title>

        <ContainerFlex>
          <TextPriceUnderline>
            {formatStringInPrice(price * 10)}
          </TextPriceUnderline>
          <Tag>{promotion} %OFF</Tag>
        </ContainerFlex>

        <ContainerFlex>
          <Text>SÓCIO WINE</Text>
          <div>
            <TextPriceSocioBase>{textSocio.match(/^R\$/)}</TextPriceSocioBase>
            <TextPriceSocio>{textSocio.match(/R\$\s*(\d+)/)[1]}</TextPriceSocio>
            <TextPriceSocioBase>
              {`,${textSocio.match(/(?<=\,)\d+/)}`}
            </TextPriceSocioBase>
          </div>
        </ContainerFlex>

        <ContainerFlex>
          <TextPrice>NÃO SÓCIO</TextPrice>
          <TextPrice>{formatStringInPrice(priceNotSocio)}</TextPrice>
        </ContainerFlex>
      </ContainerCard>
      <Button primary={true}>ADICIONAR</Button>
    </Container>
  );
}
