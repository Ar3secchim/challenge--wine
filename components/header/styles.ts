import tw from "tailwind-styled-components";

const NavBar = tw.div`
  flex
  justify-around
  items-center
  w-full
  p-4
  bg-white
  shadow-lg
`;

const Container = tw.div`
  flex 
  gap-10
`;

const List = tw.ul`
  flex
  gap-12
  pl-10
`;

const ListItem = tw.li`
  text-lg
`;

export { NavBar, List, ListItem, Container };
