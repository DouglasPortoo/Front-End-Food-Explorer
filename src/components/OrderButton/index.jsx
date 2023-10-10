import { Container } from "./styles";
import { Receipt } from "@phosphor-icons/react";

export function OrderButton() {
  return (
    <Container>
      <Receipt size={20}/>
      Meu pedido (0)
    </Container>
  );
}
