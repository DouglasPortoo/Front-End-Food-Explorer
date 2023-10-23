/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Input({ className,icon: Icon, ...rest }) {
  return (
    <Container className={className}>
      {Icon && <Icon size={20} />}

      <input {...rest} />
    </Container>
  );
}
