import { Banner, Carrossel, Container } from "./styles";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

import BannerImg from "../../assets/banner.svg";

import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`Prato/${id}`);
  }

  return (
    <Container>
      <Header />
      <Content>
        <Banner>
          <img src={BannerImg} alt="" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Banner>

        <h1>Refeições</h1>
        <Carrossel>
          <Card onClick={() => handleDetails(1)} />
          <Card onClick={() => handleDetails(1)} />
          <Card onClick={() => handleDetails(1)} />
          <Card onClick={() => handleDetails(1)} />
        </Carrossel>

        <h1>Sobremesas</h1>
        <Carrossel>
          <Card onClick={() => handleDetails(1)} />
          <Card onClick={() => handleDetails(1)} />
          <Card onClick={() => handleDetails(1)} />
          <Card onClick={() => handleDetails(1)} />
        </Carrossel>

        <h1>Bebidas</h1>
        <Carrossel>
          <Card onClick={() => handleDetails(1)} />
          <Card onClick={() => handleDetails(1)} />
          <Card onClick={() => handleDetails(1)} />
          <Card onClick={() => handleDetails(1)} />
        </Carrossel>
      </Content>
      <Footer />
    </Container>
  );
}
