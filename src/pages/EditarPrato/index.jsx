import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { IncludeButton } from "../../components/IncludeButton";
import { NoteItem } from "../../components/NoteItem";

import { UploadSimple } from "@phosphor-icons/react";

export function EditarPrato(){
  return(
    <Container>
      <Container>
      <Header />
      <Content>
        <ButtonText title="Voltar" />
        <h1>Editar Prato</h1>

        <Form>
          <div>
            <label className="imagem">
              Imagem do prato
              <div>
                <UploadSimple size={25} />
                Selecione imagem
                <input type="file" />
              </div>
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
                data={["Pratos", "Bebidas", "Sobremesas"]}
                list="Categoria"
                datalisId="Categoria"
              />
            </label>
          </div>

          <div>
            <label>
              Ingredientes
              <div className="tags">
              <NoteItem
                value="Pão Naan"
                // onChange={(e) => setNewTag(e.target.value)}
                // onClick={handleNewTag}
                // value={newTag}
              />
              <NoteItem
                isnew
                placeholder="Adicionar"
                // onChange={(e) => setNewTag(e.target.value)}
                // onClick={handleNewTag}
                // value={newTag}
              />
              </div>
            </label>
            <label className="preço">
              Preço
              <Input placeholder="R$ 00,00" type="Number" step=".01" min="0"  />
            </label>
          </div>

          <label>
            Descrição
            <textarea
              cols="30"
              rows="11"
              placeholder="A Salada César é uma opção refrescante para o verão."
            ></textarea>
          </label>

          <div className="button">
            <button type="button">Excluir Prato</button>
            <IncludeButton type="submit" title="Salvar Alterações" />
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
    </Container>
  )
}