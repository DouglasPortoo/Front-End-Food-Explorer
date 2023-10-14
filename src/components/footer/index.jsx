import { Container } from "./styles";
import LogoFooter from "../../assets/LogoFooter.svg"

export function Footer(){
  return(
    <Container>
      <img src={LogoFooter} alt="Logo" />
      <p>

      © 2023 - Todos os direitos reservados.
      </p>
    </Container>
  )
}