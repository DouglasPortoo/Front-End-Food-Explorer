import { Container } from "./styles";
import Logo from "../../assets/logo.svg"
import {MagnifyingGlass,SignOut } from "@phosphor-icons/react"
import {OrderButton} from "../OrderButton"
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <label htmlFor="search">Busque por pratos ou ingredientes</label>

      <Input
          placeholder="Busque por pratos ou ingredientes"
          id="search"
          type="text"
          icon={MagnifyingGlass}
        />
      <OrderButton/>
      <SignOut size={62}/>
    </Container>
  );
}
