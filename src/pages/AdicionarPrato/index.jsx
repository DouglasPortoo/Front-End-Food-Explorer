import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { IncludeButton } from "../../components/IncludeButton";
import { NoteItem } from "../../components/NoteItem";

import { UploadSimple } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function AdicionarPrato() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  function handleAddTag() {
    if (tags.includes(newTag)) {
      return alert("Voce ja adicionou esse ingrediente");
    }
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleAddPrato() {
    if (!name) {
      return alert("De um nome para o prato");
    }
    if (!category) {
      return alert("Selecione uma categoria");
    }
    if (tags.length == 0) {
      return alert("Adicione ao menos um ingrediente ao prato");
    }
    if (newTag.length > 0) {
      return alert("adicione o ingrediente ou remova para continuar");
    }
    if (!price) {
      return alert("De um valor ao prato");
    }
    if (!description) {
      return alert("Escreva uma breve descrição do prato");
    }
    console.log(name, category, price, tags, description);
    const response = await api.post("/pratos", {
      title: name,
      category,
      description,
      price,
      ingredients: tags,
    });
    alert(response.data);
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText title="Voltar" onClick={handleBack} />
        <h1>Adicionar Prato</h1>

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
              <Input
                placeholder="Ex.: Salada Ceasar"
                type="email"
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label>
              Categoria
              <select
                name="select"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option
                  value="Escolhar uma opção "
                  selected="selected"
                  disabled
                >
                  Escolha uma opção
                </option>
                <option value="Refeições">Refeições </option>
                <option value="Bebidas">Bebidas</option>
                <option value="Sobremesas">Sobremesas</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Ingredientes
              <div className="tags">
                {tags &&
                  tags.map((tag, index) => (
                    <NoteItem
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))}
                <NoteItem
                  isnew
                  placeholder="Adicionar"
                  onChange={(e) => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                  value={newTag}
                />
              </div>
            </label>
            <label className="preço">
              Preço
              <Input
                placeholder="R$ 00,00"
                type="Number"
                step=".01"
                min="0"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </div>

          <label>
            Descrição
            <textarea
              cols="30"
              rows="11"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              required
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>

          <div className="button">
            <IncludeButton
              type="button"
              title="Adicionar Prato"
              onClick={handleAddPrato}
            />
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
