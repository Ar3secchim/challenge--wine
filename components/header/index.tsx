import Image from "next/image";
import Logo from "@/public/logo.png";
import CarBuy from "@/assets/imgs/winebox.svg";
import Search from "@/assets/icons/busca.svg";
import User from "@/assets/icons/conta.svg";
import { Container, List, ListItem, NavBar } from "./styles";

export function Header() {
  return (
    <NavBar>
      <Container>
        <Image src={Logo} alt="logo da wine preta" />
        <List>
          <ListItem>Clube</ListItem>
          <ListItem>Loja</ListItem>
          <ListItem>Produtores</ListItem>
          <ListItem>Ofertas</ListItem>
          <ListItem>Eventos</ListItem>
        </List>
      </Container>

      <Container>
        <button type="button">
          <Image
            width={46}
            src={Search}
            alt="ison de um lupa dentro de um circulo"
          />
        </button>
        <button type="button">
          <Image width={46} src={User} alt="icon de um desenho de um usuário" />
        </button>
        <button type="button">
          <Image
            width={46}
            src={CarBuy}
            alt="imagem de um carrinho de compra"
          />
        </button>
      </Container>
    </NavBar>
  );
}
