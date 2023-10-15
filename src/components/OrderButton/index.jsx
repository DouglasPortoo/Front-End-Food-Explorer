import { Container } from "./styles";
import { Receipt } from "@phosphor-icons/react";

export function OrderButton({title, ...rest}) {
  return (
    <Container {...rest}>
      <Receipt size={20}/>
      {title}
    </Container>
  );
}
