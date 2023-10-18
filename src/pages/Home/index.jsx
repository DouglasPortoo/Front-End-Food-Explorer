import { Banner, Carrossel, Container } from "./styles";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

import BannerImg from "../../assets/banner.svg";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../../services/api";

export function Home() {
  const [menuCompleto, setMenuCompleto] = useState([]);
  const [pratos, setPratos] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [sobremesas, setSobremesas] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`Prato/${id}`);
  }

  useEffect(() => {
    async function fetchPratos() {
      const response = await api.get(`/pratos`);
      setMenuCompleto(response.data);
    }
    fetchPratos();
  }, []);

  useEffect(() => {
    const pratosFiltradas = menuCompleto.filter(
      (prato) => prato.category == "Pratos"
    );
    setPratos(pratosFiltradas);

    const bebidasFiltradas = menuCompleto.filter(
      (bebida) => bebida.category == "Bebidas"
    );
    setBebidas(bebidasFiltradas);

    const sobremesasFiltradas = menuCompleto.filter(
      (sobremesa) => sobremesa.category == "Sobremesas"
    );
    setSobremesas(sobremesasFiltradas);
  }, [menuCompleto]);

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
          {pratos.length > 0 &&
            pratos.map((prato) => (
              <Card
                key={prato.id}
                data={prato}
                onClick={() => handleDetails(prato.id)}
              />
            ))}
        </Carrossel>

        <h1>Sobremesas</h1>
        <Carrossel>
          {sobremesas.map((prato) => (
            <Card
              key={prato.id}
              data={prato}
              onClick={() => handleDetails(prato.id)}
            />
          ))}
        </Carrossel>

        <h1>Bebidas</h1>
        <Carrossel>
          {bebidas.map((prato) => (
            <Card
              key={prato.id}
              data={prato}
              onClick={() => handleDetails(prato.id)}
            />
          ))}
        </Carrossel>
      </Content>
      <Footer />
    </Container>
  );
}
