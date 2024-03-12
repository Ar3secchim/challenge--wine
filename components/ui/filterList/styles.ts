import tw from "tailwind-styled-components";

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

const SpanContainer = tw.span`
  relative
  text-white 
  transition-opacity -translate-y-2/4 -translate-x-2/4 
  opacity-0 
  pointer-events-none 
  top-[14px] right-[10px] 
  peer-checked:opacity-100
`;

const LabelInput = tw.label`
  flex 
  rounded-full 
  cursor-pointer
`;

const ListItem = tw.li`
  flex
  list-none
  text-base
  my-3
`;

export { LabelInput, SpanContainer, InputCheckbox, ListItem };
