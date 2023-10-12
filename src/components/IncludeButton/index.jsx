import { Container } from "./styles";

export function IncludeButton({title,...rest}){
  return(
    <Container{...rest}>
     <p>{title}</p>
    </Container>
  )
}