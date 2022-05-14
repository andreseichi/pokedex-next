import { ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return <Container onClick={props.onClick}>{children}</Container>;
}
