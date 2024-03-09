import tw from "tailwind-styled-components";

const Container = tw.div`
  md:grid flex 
  grid-cols-4
  xl:mx-auto lg:mx-10 md:mx-6 mx-4
  max-w-6xl 
  my-6
`;

const ContainerFlex = tw.div`
  flex
  flex-col
  col-span-3  
`;

const ContainerSubGrid = tw.section`
  col-span-3
  flex lg:justify-normal justify-center
  flex-wrap
  gap-8
`;

const ToogleListContainer = tw.section`
  lg:flex
  lg:flex-col
  md:flex
  md:flex-col
  hidden
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
  md:text-black text-zinc-700
`;

const Span = tw.span`
  flex
  gap-1
  pb-4
  md:border-0 border-b 
  mb-6
`;

const SpanProduts = tw.span`
  md:hidden flex
  justify-center
  
  gap-1
`;

const Button = tw.button`
  flex md:hidden
  items-center
  text-sm 
  font-bold  
  justify-center
  text-pink-600
  border-2 border-pink-600 
  m-8 p-2
  rounded-md
`;

export {
  Container,
  ContainerFlex,
  ContainerSubGrid,
  Title,
  SubTitle,
  Text,
  Span,
  ToogleListContainer,
  SpanProduts,
  Button,
};
