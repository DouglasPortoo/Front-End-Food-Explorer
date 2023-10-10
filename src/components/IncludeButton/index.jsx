import { Container } from "./styles";

export function IncludeButton({title,...rest}){
  return(
    <Container{...rest}>
      {title}
    </Container>
  )
}