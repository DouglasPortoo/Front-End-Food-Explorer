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
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  function handleAddTag() {
    if (ingredients.includes(newIngredients)) {
      return alert("Voce ja adicionou esse ingrediente");
    }
    setIngredients((prevState) => [...prevState, newIngredients]);
    setNewIngredients("");
  }

  function handleRemoveTag(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredients) => ingredients !== deleted)
    );
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);
  }

  async function handleAddPrato() {
    if (avatarFile.length == 0) {
      return alert("Adicione uma foto ao prato");
    }

    if (!title) {
      return alert("De um nome para o prato");
    }
    if (!category) {
      return alert("Selecione uma categoria");
    }
    if (ingredients.length == 0) {
      return alert("Adicione ao menos um ingrediente ao prato");
    }
    if (newIngredients.length > 0) {
      return alert("adicione o ingrediente ou remova para continuar");
    }
    if (!price) {
      return alert("De um valor ao prato");
    }
    if (!description) {
      return alert("Escreva uma breve descrição do prato");
    }

    const formData = new FormData();
    formData.append("avatar", avatarFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("ingredients", ingredients);

    const response = await api.post("/pratos", formData);
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
                <input type="file" onChange={handleChangeAvatar} />
              </div>
            </label>
            <label>
              Nome
              <Input
                placeholder="Ex.: Salada Ceasar"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
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
                {ingredients &&
                  ingredients.map((ingredient, index) => (
                    <NoteItem
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveTag(ingredient)}
                    />
                  ))}
                <NoteItem
                  isnew
                  placeholder="Adicionar"
                  onChange={(e) => setNewIngredients(e.target.value)}
                  onClick={handleAddTag}
                  value={newIngredients}
                />
              </div>
            </label>
            <label className="preço">
              Preço
              <Input
                placeholder="R$ 00,00"
                type="number"
                step=".01"
                min="0"
                required
                onChange={(e) => setPrice(Number(e.target.value))}
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
