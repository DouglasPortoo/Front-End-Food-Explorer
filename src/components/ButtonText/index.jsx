import {CaretLeft} from "@phosphor-icons/react"
import {Container} from './styles'

export function ButtonText ({title, ...rest}){
  return(
    <Container>
      <button {...rest} ><CaretLeft/>{title}</button>
    </Container>
  )
}