import tw from "tailwind-styled-components";

const Container = tw.div`
  flex
  flex-col
  w-full
  mx-auto 
  max-w-6xl 
  mb-4
`;

const ContainerFlex = tw.div`
  flex
  flex-col
`;

const ContainerGrid = tw.section`
  grid 
  grid-cols-4 
  grid-rows-1 
  gap-4
  mt-10
  md:mx-8
  sm:mx-8
`;

const ContainerSubGrid = tw.section`
 col-span-3 
 flex 
 flex-col 
 gap-4
`;

const Title = tw.h1`
  text-xl
  font-bold 
  text-neo
  pb-8
`;

const SubTitle = tw.h2`
  text-lg
  font-bold 
`;

const Text = tw.p`
  text-lg
`;

const Span = tw.span`
  flex
  gap-1
  pb-6
`;

const ListItem = tw.li`
  flex
  items-center
  list-none
  gap-2
  text-base
  my-3
`;

export {
  Container,
  ContainerFlex,
  ContainerGrid,
  ContainerSubGrid,
  Title,
  SubTitle,
  Text,
  Span,
  ListItem,
};
