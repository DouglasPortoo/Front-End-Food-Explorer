
import { Heart } from "@phosphor-icons/react";
import { IncludeButton } from "../IncludeButton";
import { Stepper } from "../Stepper";
import { Container, FavoriteButton, Frame } from "./styles";

export function Card (){
  return(
    <Container>
      <FavoriteButton  >
        <Heart size={20} color="white"/>
      </FavoriteButton>
      <img src="https://github.com/DouglasPortoo.png" alt="" />
      <h1>Torradas de Parma</h1>
      <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
      <span>R$ 25,97</span>
      <Frame>
      <Stepper/>
      <IncludeButton title="Incluir"/>

      <div>
      <Stepper/>
      <IncludeButton title="Incluir"/>
      </div>
      </Frame>
    </Container>
  )
}