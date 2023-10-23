import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { IncludeButton } from "../../components/IncludeButton";
import { NoteItem } from "../../components/NoteItem";

import { UploadSimple } from "@phosphor-icons/react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function EditarPrato() {
  const [title, setTitle] = useState("teste");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredients, setNewIngredients] = useState("");

  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  const params = useParams();

  function handleBack() {
    navigate("/");
  }

  async function handleDelete() {
    const confirmação = confirm("Tem certeza que deseja excluir este prato?");

    if (confirmação) {
      await api.delete(`/pratos/${params.id}`);
      navigate("/");
    }
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

  async function handleEditPrato() {
    if (avatarFile) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("avatar", avatarFile);
      await api.patch(`/pratos/avatar/${params.id}`, fileUploadForm);
    }

    if (ingredients.length == 0) {
      return alert("Adicione ao menos um ingrediente ao prato");
    }

    if (newIngredients.length > 0) {
      return alert("adicione o ingrediente ou remova para continuar");
    }
    
    const response = await api.put(`/pratos/${params.id}`, {
      title,
      category,
      description,
      price,
      ingredients,
    });
    alert(response.data);
    navigate("/");
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/pratos/${params.id}`);
      const tags = response.data.tags;
      const tagsfiltered = tags.map((tag) => tag.ingredients);
      setIngredients([...tagsfiltered]);
      setTitle(response.data.title);
      setCategory(response.data.category);
      setPrice(response.data.price);
      setDescription(response.data.description);
    }

    fetchNote();
  }, [params.id]);

  return (
    <Container>
      <Container>
        <Header />
        <Content>
          <ButtonText title="Voltar" onClick={handleBack} />
          <h1>Editar Prato</h1>

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
                  value={title}
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>

              <label>
                Categoria
                <select
                  name="select"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
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
                  {ingredients.length > 0 &&
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
                  value={price}
                  type="Number"
                  step=".01"
                  min="0"
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </label>
            </div>

            <label>
              Descrição
              <textarea
                cols="30"
                rows="11"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>

            <div className="button">
              <button type="button" onClick={handleDelete}>
                Excluir Prato
              </button>
              <IncludeButton
                type="button"
                title="Salvar Alterações"
                onClick={handleEditPrato}
              />
            </div>
          </Form>
        </Content>
        <Footer />
      </Container>
    </Container>
  );
}
