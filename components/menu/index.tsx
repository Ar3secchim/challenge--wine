"use client";
import { useState } from "react";
import Image from "next/image";
import CloseIcon from "@/assets/icons/close.svg";
import User from "@/assets/icons/conta.svg";

import {
  Container,
  Line,
  List,
  ListItem,
  MenuBar,
  Section,
  Button,
} from "./styles";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button $icon={true} onClick={handleClick}>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </Button>

      {isOpen && (
        <MenuBar>
          <Container>
            <Section>
              <Image
                width={60}
                src={User}
                alt="icon de um desenho de um usuário"
              />
              <div>
                <Button>Entre na sua conta</Button>
                <Button $link={true}>Entrar &gt;</Button>
              </div>
            </Section>

            <Button $icon={true} onClick={handleClick}>
              <Image width={22} src={CloseIcon} alt="icon x " />
            </Button>
          </Container>

          <List>
            <ListItem>Clube</ListItem>
            <ListItem>Loja</ListItem>
            <ListItem>Produtores</ListItem>
            <ListItem>Ofertas</ListItem>
            <ListItem>Eventos</ListItem>
          </List>
        </MenuBar>
      )}
    </>
  );
}
