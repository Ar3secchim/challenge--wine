import tw from "tailwind-styled-components";

interface Props {
  isActive: boolean;
}

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
  mx-auto
`;

const List = tw.ul`
  hidden
  md:flex-row
  lg:gap-12
  lg:flex
`;

const ListItem = tw.li`
  hidden
  text-lg
  lg:flex
`;

const Circle = tw.circle<Props>`
  stroke-none
  lg:stroke-black

  {${(i) => (i.isActive == true ? "lg:stroke-pink-700" : "")}}
`;

const ItemsCar = tw.span`
  absolute top-12
  w-5 h-5
  rounded-full
  bg-slate-200
  text-pink-700
  text-center
  text-sm
`;

export { Circle, Container, List, ListItem, NavBar, ItemsCar };
