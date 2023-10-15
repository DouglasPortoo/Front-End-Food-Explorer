import {
  ButtonsContainer,
  Container,
  Frame,
  SubFrame,
  TagContainer,
} from "./styles";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Stepper } from "../../components/Stepper";
import { IncludeButton } from "../../components/IncludeButton";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function Prato() {
  const { user } = useAuth();

  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  function handleEdit(id) {
    navigate(`/EditarPrato/${id}`);
  }

  console.log(user);

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText title="Voltar" onClick={handleBack} />

        <Frame>
          <img src="https://github.com/DouglasPortoo.png" alt="" />

          <SubFrame>
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>

            <TagContainer>
              <Tag title="alface" />
              <Tag title="cebola" />
              <Tag title="pepino" />
              <Tag title="rabanete" />
              <Tag title="tomate" />
            </TagContainer>

            <ButtonsContainer>
              {user.role === "admin" ? (
                <IncludeButton title="Editar Prato" onClick={()=>handleEdit(1)} />
              ) : (
                <>
                  <Stepper />
                  <IncludeButton title="Incluir-R$25,00"  />
                </>
              )}
            </ButtonsContainer>
          </SubFrame>
        </Frame>
      </Content>
      <Footer />
    </Container>
  );
}
