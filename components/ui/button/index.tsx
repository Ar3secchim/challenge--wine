import { HtmlHTMLAttributes } from "react";
import { ButtonStyle } from "./style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
  link?: boolean;
  primary?: boolean;
  OnClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export function Button({ icon, link, children, OnClick, primary }: ButtonProps) {
  return (
    <ButtonStyle $primary={primary} $icon={icon} $link={link} onClick={OnClick}>
      {children}
    </ButtonStyle>
  );
}
