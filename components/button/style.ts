import tw from "tailwind-styled-components";

interface ButtonProps {
  $icon?: boolean;
  $link?: boolean;
}

const ButtonStyle = tw.button<ButtonProps>`
    ${(i) => (i.$icon ? "py-2 gap-1 justify-end items-center" : "")}
    ${(i) => (i.$link ? " text-[#D14B8F] font-bold" : "")}

    w-1/3
    flex
    text-sm
`;

export { ButtonStyle };
