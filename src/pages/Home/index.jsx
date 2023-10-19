import { Banner, Carrossel, Container } from "./styles";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

import BannerImg from "../../assets/banner.svg";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

export function Home() {
  const { search } = useAuth();

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
      const response = await api.get(`/pratos?title=${search}`);
      setMenuCompleto(response.data);
      setPratos([])
      setBebidas([])
      setSobremesas([])
    }
    fetchPratos();
    
  }, [search]);

  useEffect(() => {
    const pratosFiltradas =menuCompleto.filter(
      (prato) => prato.category == "Pratos"
    );
    setPratos(pratosFiltradas);

    if (pratosFiltradas.length>0){
      setPratos(pratosFiltradas);
    }else{
      setPratos([])
    }

    const bebidasFiltradas = menuCompleto.filter(
      (bebida) => bebida.category == "Bebidas"
    );
    
    if (bebidasFiltradas.length>0){
      setBebidas(bebidasFiltradas);
    }else{
      setBebidas([])
    }

    const sobremesasFiltradas = menuCompleto.filter(
      (sobremesa) => sobremesa.category == "Sobremesas"
    );
    
    if (sobremesasFiltradas.length>0){
      setSobremesas(sobremesasFiltradas);
    }else{
      setSobremesas([])
    }

    console.log(menuCompleto);
    
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

        {pratos.length> 0 &&  <h1>Refeiçoes</h1>}

        <Carrossel>
          {pratos.map((prato) => (
            <Card
              key={prato.id}
              data={prato}
              onClick={() => handleDetails(prato.id)}
            />
          ))}
        </Carrossel>

        {sobremesas.length> 0 &&  <h1>Sobremesas</h1>}    
        
        <Carrossel>
          {sobremesas.map((prato) => (
            <Card
              key={prato.id}
              data={prato}
              onClick={() => handleDetails(prato.id)}
            />
          ))}
        </Carrossel>
        
        {bebidas.length> 0 &&  <h1>Bebidas</h1>}
        
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
