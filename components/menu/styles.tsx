import tw from "tailwind-styled-components";

interface ButtonProps {
  $icon?: boolean;
  $link?: boolean;
}

const Button = tw.button<ButtonProps>`
    ${(i) => (i.$icon ? "p-2 gap-1 items-center flex-col justify-around" : "")}
    ${(i) => (i.$link ? " text-[#D14B8F] font-bold" : "")}

    flex
    text-sm
    lg:hidden
`;

const Line = tw.span`
  w-6
  h-1
  bg-black
  rounded-full
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

export { Line, Container, List, ListItem, MenuBar, Button, Section };
