import {
  ButtonsContainer,
  Container,
  Frame,
  SubFrame,
  TagContainer,
  Content,
} from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Stepper } from "../../components/Stepper";
import { IncludeButton } from "../../components/IncludeButton";
import { useNavigate, useParams } from "react-router-dom";
//import { Footer } from "../../components/Footer";

import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import avatarPlaceholder from "../../assets/semfoto.svg";
import { api } from "../../services/api";
import { SideMenu } from "../../components/SideMenu";

export function Prato() {
  const { user } = useAuth();

  const [menuIsOpen, setMenuIsOpen] = useState("false");

  const [data, setData] = useState("");

  const params = useParams();

  const avatarUrl =
    data.img !== null
      ? `${api.defaults.baseURL}/files/${data.img}`
      : avatarPlaceholder;

  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  function handleEdit(id) {
    navigate(`/EditarPrato/${id}`);
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/pratos/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [params.id]);

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <Content>
        <ButtonText title=" voltar" onClick={handleBack} />

        <Frame>
          <img src={avatarUrl} />

          <SubFrame>
            <h2>{data.title}</h2>
            <p>{data.description}</p>

            <TagContainer>
              {data.tags &&
                data.tags.map((tag, index) => (
                  <Tag key={index} title={tag.ingredients} />
                ))}
            </TagContainer>

            <ButtonsContainer>
              {user.role === "admin" ? (
                <IncludeButton
                  title="Editar Prato"
                  onClick={() => handleEdit(data.id)}
                />
              ) : (
                <>
                  <Stepper />
                  <IncludeButton title="Incluir-R$25,00" />
                </>
              )}
            </ButtonsContainer>
          </SubFrame>
        </Frame>
      </Content>
      {/* <Footer /> */}
    </Container>
  );
}
