import { IncludeButton } from "../../components/IncludeButton";
import { Container } from "./styles";

export function Home (){
  return(
    <Container>
      <IncludeButton title="Incluir" />
      <IncludeButton title="Entrar"/>
      <IncludeButton title="Criar conta" disabled />
    </Container>
  )
}