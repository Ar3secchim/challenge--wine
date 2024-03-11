import tw from "tailwind-styled-components";

const Container = tw.div`
  w-full
  absolute
  flex
  items-center
  left-0
  top-[88px]
  p-3
  bg-[#F5F5F5]
  shadow-md
`;

const ContainerInput = tw.div`
  flex
  justify-between
  items-center
  bg-white
  w-full
  xl:mx-32
  lg:mx-8
  md:mx-0
`;

const Input = tw.input`
  flex
  w-full
  h-10
  px-4
  py-2
  text-sm
  placeholder-gray-400
  focus:outline-none
`;

export { Container, Input, ContainerInput };
