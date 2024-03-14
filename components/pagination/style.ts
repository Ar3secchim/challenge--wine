import tw from "tailwind-styled-components";

interface Props {
  $className: string | boolean;
}

const Container = tw.div`
  container
  md:flex hidden
  gap-4
  justify-center
  items-center
  my-7
`;

const ButtonPagination = tw.button<Props>`
  border
  border-pink-700
  text-pink-700
  w-9
  h-9
  p-3
  rounded-sm
  flex 
  justify-center
  items-center
  flex-col 
  px-3 
  font-bold

  ${(i) => (i.$className == "currentPage" ? "bg-pink-700 text-white" : "")}
  ${(i) => (i.$className == "nextPage" ? "w-16" : "")}
`;

const Button = tw.button`
  text-pink-700
  text-base
  font-bold
  flex 
  items-center  
  gap-2
  fill-zinc-500

  disabled:text-gray-500
`;

const SVGElement = tw.svg<Props>`
  fill-pink-700
  -m-1
  ${(i) => (i.$className == "disabled" ? "fill-zinc-500" : "")}
`;

export { Button, ButtonPagination, Container, SVGElement };
