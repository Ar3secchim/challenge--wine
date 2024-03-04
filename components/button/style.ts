import tw from "tailwind-styled-components";

interface ButtonProps {
  $icon?: boolean;
  $link?: boolean;
  $primary?: boolean;
}

const ButtonStyle = tw.button<ButtonProps>`
    ${(i) =>
      i.$icon
        ? "bg-transparent py-2 gap-1 items-center justify-center w-1/3 flex-col"
        : ""}

    ${(i) =>
      i.$link
        ? "w-full bg-transparent text-[#D14B8F] items-center justify-end gap-2"
        : ""}

    ${(i) =>
      i.$primary
        ? "  w-full items-center text-white justify-center p-3 bg-[#7EBC43] rounded-[4px] font-bold "
        : ""}
    

    flex
    text-sm  
`;

export { ButtonStyle };
