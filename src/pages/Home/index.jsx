import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Container } from "./styles";
import { Footer } from "../../components/footer";
import { Card } from "../../components/Card";
export function Home (){
  return(
    <Container>
      <Header  />
      <Content>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
      </Content>
      <Footer/>

    </Container>
  )
}