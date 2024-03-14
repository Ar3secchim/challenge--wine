import tw from "tailwind-styled-components";

const Container = tw.div`
  md:w-64 w-40
  h-[387px] 
`;

const ContainerFlex = tw.div`
  flex
  items-center
`;

const ContainerCard = tw.div`
  h-[333px]
  bg-white
  shadow-lg
  lg:rounded-none rounded-md
  p-5
  mb-4
  flex
  flex-col
  items-center
  justify-between
`;

const Title = tw.h1`
  font-lato
  font-bold
  text-base
  text-center
  -mt-6
  mb-1
`;

const Tag = tw.span`
  bg-[#F79552]
  font-bold
  text-white
  text-[10px]
  text-center
  rounded-sm
  px-[3px]
`;

const TextPrice = tw.span`
  md:text-xs text-[10px]
  text-center
  text-[#888888]
  font-bold
  rounded-md 
  p-[2px]
  gap-2
`;

const Text = tw.p`
  md:text-sm text-xs
  md:font-bold font-normal
  text-center
  mr-1 
`;

const TextPriceUnderline = tw(TextPrice)`
  line-through
`;

const TextPriceSocio = tw(TextPrice)`
  text-pink-700
  md:text-2xl  text-base
  p-0
  pl-1
`;
const TextPriceSocioBase = tw(TextPrice)`
  text-pink-700
  md:text-sm text-sm
  p-0 
`;

export {
  Container,
  Title,
  ContainerCard,
  Tag,
  Text,
  TextPrice,
  TextPriceSocio,
  TextPriceUnderline,
  ContainerFlex,
  TextPriceSocioBase,
};
