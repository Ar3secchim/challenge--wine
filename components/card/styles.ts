import tw from "tailwind-styled-components";

const Container = tw.div`
  w-[256px]
  h-[387px]
`;

const ContainerCard = tw.div`
  bg-white
  shadow-lg
  p-2
  mb-4
  flex
  flex-col
  items-center
  justify-center
`;

const Title = tw.h1`
  font-lato
  font-bold
  text-base
  text-center
  -mt-6
`;

export { Container, Title, ContainerCard };
