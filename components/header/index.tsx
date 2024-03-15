"use client";
import User from "@/assets/icons/conta.svg";
import CarBuy from "@/assets/imgs/winebox.svg";
import Logo from "@/public/logo.png";
import { Menu } from "@/ui/menu";
import Image from "next/image";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { SearchBar } from "../searchBar";
import { Circle, Container, ItemsCar, List, ListItem, NavBar } from "./styles";
import { ArrowLeft, Frown } from "lucide-react";

export function Header() {
  const dropdownRef = useRef(null);
  const [isOpen, setOpen] = useState({
    isSearchOpen: false,
    isOpenCart: false,
  });

  const handlerOpenCart = (): void => {
    setOpen((prevState) => ({
      ...prevState,
      isOpenCart: !isOpen.isOpenCart,
    }));
  };

  const handleClick = (): void => {
    setOpen((prevState) => ({
      ...prevState,
      isSearchOpen: !isOpen.isSearchOpen,
    }));
  };

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen((prevState) => ({
          ...prevState,
          isOpenCart: !isOpen.isOpenCart,
        }));
      }
    };
    if (isOpen.isOpenCart) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isOpen.isOpenCart]);

  const itemCount = 0;
  return (
    <>
      <NavBar ref={dropdownRef}>
        <Container>
          <Menu />
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
          <button onClick={handleClick}>
            <svg
              width="46"
              height="46"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.042 13.7474C18.3581 13.7474 13.7503 18.3551 13.7503 24.0391C13.7503 29.723 18.3581 34.3307 24.042 34.3307C29.7259 34.3307 34.3337 29.723 34.3337 24.0391C34.3337 18.3551 29.7259 13.7474 24.042 13.7474ZM12.167 24.0391C12.167 17.4807 17.4836 12.1641 24.042 12.1641C30.6004 12.1641 35.917 17.4807 35.917 24.0391C35.917 27.034 34.8083 29.77 32.9789 31.8589L43.5991 42.4791C43.9082 42.7882 43.9082 43.2895 43.5991 43.5987C43.2899 43.9078 42.7887 43.9078 42.4795 43.5987L31.8592 32.9784C29.7705 34.8063 27.0356 35.9141 24.042 35.9141C17.4836 35.9141 12.167 30.5974 12.167 24.0391Z"
                fill={isOpen.isSearchOpen ? "#be185d" : "#000000"}
              />

              <Circle
                cx="28"
                cy="27.9974"
                r="27"
                stroke-width="2"
                isActive={isOpen.isSearchOpen}
              />
            </svg>
          </button>

          {isOpen.isSearchOpen && <SearchBar />}
          <button className="hidden md:flex">
            <Image
              width={46}
              src={User}
              alt="icon de um desenho de um usuário"
            />
          </button>

          <button onClick={handlerOpenCart}>
            <Image
              width={46}
              src={CarBuy}
              alt="imagem de um carrinho de compra"
            />
            <ItemsCar>{itemCount}</ItemsCar>
          </button>
        </Container>
      </NavBar>

      {isOpen.isOpenCart && (
        <div className="absolute z-50 bg-black/20 top-0  h-full w-full ">
          <div className="absolute bg-gray-100 h-full  w-1/4 lg:w-1/6 right-0">
            <div className="bg-white flex gap-2 p-4">
              <button onClick={handlerOpenCart}>
                {" "}
                <ArrowLeft />{" "}
              </button>
              <h1 className="text-lg"> WinerBox({itemCount}) </h1>
            </div>

            <div className="h-1/4 flex flex-col justify-center items-center p-8">
              {itemCount > 0 ? (
                <></>
              ) : (
                <>
                  <span>
                    {" "}
                    <Frown />{" "}
                  </span>
                  <h3 className="font-bold text-lg text-center ">
                    Você ainda não escolheu nenhum produto
                  </h3>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
