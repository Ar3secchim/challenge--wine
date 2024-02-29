import tw from "tailwind-styled-components";

const Container = tw.div`
  w-[256px]
  h-[387px]
  flex
  flex-col
  items-center
  justify-center

  bg-white
  shadow-lg
`;

const Title = tw.h1`
  font-lato
  font-bold
  text-base
  text-center
  -mt-6
`;

export { Container, Title };
