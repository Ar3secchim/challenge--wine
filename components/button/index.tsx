import { HtmlHTMLAttributes } from "react";
import { ButtonStyle } from "./style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
  link?: boolean;
}

export function Button({ icon, link, children }: ButtonProps) {
  return (
    <ButtonStyle $icon={icon} $link={link}>
      {children}
    </ButtonStyle>
  );
}
