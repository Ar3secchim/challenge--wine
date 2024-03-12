import tw from "tailwind-styled-components";

interface ButtonProps {
  $icon?: boolean;
  $link?: boolean;
  $primary?: boolean;
}

const ButtonStyle = tw.button<ButtonProps>`
  flex
  text-sm  
  items-center
  justify-center

  ${(i) =>
    i.$primary
      ? "  w-full text-white p-3 bg-[#7EBC43] rounded-[4px] font-bold "
      : ""}

  ${(i) => (i.$icon ? "bg-transparent py-2 gap-1  w-1/3 flex-col" : "")}

  ${(i) =>
    i.$link ? "w-full bg-transparent text-[#D14B8F] justify-end gap-2" : ""}

`;

export { ButtonStyle };
