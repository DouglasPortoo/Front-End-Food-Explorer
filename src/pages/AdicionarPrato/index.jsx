import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { IncludeButton } from "../../components/IncludeButton";
import { Tag } from "../../components/Tag";

import { UploadSimple } from "@phosphor-icons/react";

export function AdicionarPrato() {
  return (
    <Container>
      <Header />
      <Content>
        <ButtonText title="voltar" />
        <h1>Adicionar Prato</h1>

        <Form>
          <div>
            <label className="imagem">
              Imagem do prato
              <button type="button">
              <UploadSimple/>
              Selecione imagem
              </button>
            </label>
            <label>
              Nome
              <Input placeholder="Ex.: Salada Ceasar" type="email" />
            </label>

            <label>
              Categoria
              <Input
                placeholder="Refeição"
                type="text"
                data={["pratos", "bebidas", "sobremesas"]}
                list="Categoria"
                datalisId="Categoria"
              />
            </label>
          </div>

          <div>
            <label>
              Ingredientes
              <div className="tags">
                <Tag title="teste" />
                <Tag title="teste" />
                <Tag title="teste" />
                <Tag title="teste" />
              </div>
            </label>
            <label className="preço">
              Preço
              <Input placeholder="R$ 00,00" type="Number" />
            </label>
          </div>

          <label>
            Descrição
            <textarea
              cols="30"
              rows="11"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            ></textarea>
          </label>

          <div className="button">
            <IncludeButton type="submit" title="Salvar Alterações" />
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
