import { Banner, Carrossel, Container } from "./styles";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

import BannerImg from "../../assets/banner.svg";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { SideMenu } from "../../components/SideMenu";

export function Home() {
  const [search, setSearch] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState("false");

  const [menuCompleto, setMenuCompleto] = useState([]);
  const [pratos, setPratos] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [sobremesas, setSobremesas] = useState([]);

  const [slidePerview, setslidePerview] = useState(4);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`Prato/${id}`);
  }

  function handleEdit(id) {
    navigate(`EditarPrato/${id}`);
  }

  useEffect(() => {
    async function fetchPratos() {
      const response = await api.get(`/pratos?title=${search}`);
      setMenuCompleto(response.data);
      setPratos([]);
      setBebidas([]);
      setSobremesas([]);
    }
    fetchPratos();
  }, [search]);

  useEffect(() => {
    const pratosFiltradas = menuCompleto.filter(
      (prato) => prato.category == "Refeições"
    );
    setPratos(pratosFiltradas);

    if (pratosFiltradas.length > 0) {
      setPratos(pratosFiltradas);
    } else {
      setPratos([]);
    }

    const bebidasFiltradas = menuCompleto.filter(
      (bebida) => bebida.category == "Bebidas"
    );

    if (bebidasFiltradas.length > 0) {
      setBebidas(bebidasFiltradas);
    } else {
      setBebidas([]);
    }

    const sobremesasFiltradas = menuCompleto.filter(
      (sobremesa) => sobremesa.category == "Sobremesas"
    );

    if (sobremesasFiltradas.length > 0) {
      setSobremesas(sobremesasFiltradas);
    } else {
      setSobremesas([]);
    }
  }, [menuCompleto]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 770) {
        setslidePerview(1);
      } else {
        setslidePerview(4);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <SideMenu
        setSearch={setSearch}
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header setSearch={setSearch} onOpenMenu={() => setMenuIsOpen(true)} />
      <Content>
        <Banner>
          <img src={BannerImg} alt="" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Banner>

        {pratos.length > 0 && <h1>Refeições</h1>}

        <Carrossel>
          <Swiper slidesPerView={slidePerview} navigation>
            {pratos.map((prato) => (
              <SwiperSlide key={prato.id}>
                <Card
                  key={prato.id}
                  data={prato}
                  onClickDetails={() => handleDetails(prato.id)}
                  onClickEdit={() => handleEdit(prato.id)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Carrossel>

        {sobremesas.length > 0 && <h1>Sobremesas</h1>}

        <Carrossel>
          <Swiper slidesPerView={slidePerview} navigation>
            {sobremesas.map((prato) => (
              <SwiperSlide key={prato.id}>
                <Card
                  key={prato.id}
                  data={prato}
                  onClickDetails={() => handleDetails(prato.id)}
                  onClickEdit={() => handleEdit(prato.id)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Carrossel>

        {bebidas.length > 0 && <h1>Bebidas</h1>}

        <Carrossel>
          <Swiper slidesPerView={slidePerview} navigation>
            {bebidas.map((prato) => (
              <SwiperSlide key={prato.id}>
                <Card
                  key={prato.id}
                  data={prato}
                  onClickDetails={() => handleDetails(prato.id)}
                  onClickEdit={() => handleEdit(prato.id)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Carrossel>
      </Content>
      <Footer/>
    </Container>
  );
}
