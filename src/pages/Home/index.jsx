import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Banner, Carrossel, Container } from "./styles";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

import BannerImg from "../../assets/banner.svg"

export function Home (){
  return(
    <Container>
      <Header  />
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
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Carrossel>

      <h1>Sobremesas</h1>
      <Carrossel>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Carrossel>

      <h1>Bebidas</h1>
      <Carrossel>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Carrossel>
        
      </Content>
      <Footer/>

    </Container>
  )
}