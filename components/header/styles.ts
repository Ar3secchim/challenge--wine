import tw from "tailwind-styled-components";

const NavBar = tw.nav`
  text-neo
  flex
  items-center
  justify-between
  p-4
  w-full
  bg-white
  shadow-md
  lg:justify-around
  lg:shadow-sm
`;

const Container = tw.div`
  flex 
  gap-4
  lg:gap-10
`;

const List = tw.ul`
  hidden
  md:flex-row
  lg:pl-10
  lg:gap-12
  lg:flex
`;

const ListItem = tw.li`
  hidden
  text-lg
  lg:flex
`;

const Circle = tw.circle`
  stroke-none
  lg:stroke-black
`;

const Button = tw.button`

`;

export { NavBar, List, ListItem, Container, Circle, Button };
