import { Container } from "./styles";
import { Plus, Minus } from "@phosphor-icons/react";

export function Stepper() {
  return (
    <Container>
      <Plus />
      <p>01</p>
      <Minus />
    </Container>
  );
}
