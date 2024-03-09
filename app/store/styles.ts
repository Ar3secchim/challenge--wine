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
  flex justify-center
  flex-wrap
  gap-8
`;

const ToogleList = tw.section`
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

const ListItem = tw.li`
  flex
  items-center
  list-none
  gap-2
  text-base
  my-3
`;

const InputCheckbox = tw.input`
  appearance-none 
  peer  
  h-5 w-5 
  cursor-pointer 
  rounded-full 
  border-2 border-zinc-600 
  transition-all before:absolute 
  checked:border-pink-700 checked:bg-pink-700 checked:before:bg-pink-700 hover:before:opacity-10
`;

const LabelInput = tw.label`
  relative 
  flex 
  items-center  
  rounded-full 
  cursor-pointer
`;

const SpanContainer = tw.span`
  absolute
  text-white 
  transition-opacity -translate-y-2/4 -translate-x-2/4 
  opacity-0 
  pointer-events-none 
  top-2/4 left-2/4  
  peer-checked:opacity-100
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
  ListItem,
  InputCheckbox,
  LabelInput,
  SpanContainer,
  ToogleList,
  SpanProduts,
  Button,
};
