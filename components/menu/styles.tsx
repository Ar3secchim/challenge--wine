import tw from "tailwind-styled-components";
import { ButtonStyle } from "../button/style";

interface ButtonProps {
  $link?: boolean;
  $icon?: boolean;
}

const Line = tw.span`
  w-6
  h-1
  bg-black
  rounded-full
`;

const Button = tw(ButtonStyle)<ButtonProps>`
  lg:hidden

  ${(i) =>
    i.$link
      ? "w-full bg-transparent text-[#D14B8F] items-center justify-end gap-2"
      : ""}

  ${(i) =>
    i.$icon
      ? "bg-transparent py-2 gap-1 items-center justify-center w-1/3 flex-col"
      : ""}
`;

const MenuBar = tw.div`
  flex
  flex-col

  absolute
  left-0
  top-0
  
  h-screen
  w-3/4

  bg-[#F5F5F5]
  shadow-lg
  z-50
`;

const Container = tw.div`
  flex
  justify-between
  bg-white
  shadow-sm
  p-6
`;

const Section = tw.div`
  flex
  gap-4
  items-center
`;

const List = tw.ul`
  flex
  flex-col
  items-center
  gap-12
  m-4
`;

const ListItem = tw.li`
  text-lg
`;

export { Line, Container, List, ListItem, MenuBar, Section, Button };
