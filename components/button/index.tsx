import { ButtonStyle } from "./style";

interface ButtonProps {
  icon?: boolean;
  link?: boolean;
  children?: any;
}

export function Button({ icon, link, children }: ButtonProps) {
  return (
    <ButtonStyle $icon={icon} $link={link}>
      {children}
    </ButtonStyle>
  );
}
