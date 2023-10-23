import { Container, Form, FormContainer, ImageLogo } from "./styles";

import { IncludeButton } from "../../components/IncludeButton";
import { Input } from "../../components/Input";

import Logo from "../../assets/logo.svg";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

export function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleCreateUser() {
    try {
      if (name == "") {
        return alert("Digite um nome valido");
      }

      if (email === "") {
        return alert("Digite um nome email");
      }

      if (password === "" || password.length < 5) {
        return alert("Digite uma senha valida");
      }

      const response = await api.post("/users", { name, email, password });
      alert(response.data);

      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.");
      }
    }
  }

  return (
    <Container>
      <ImageLogo>
        <img src={Logo} alt="" />
      </ImageLogo>
      <FormContainer>
        <Form>
          <h1>Crie sua conta</h1>
          <label>
            Seu nome
            <Input
              placeholder="Exemplo: Maria da Silva"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email
            <Input
              placeholder="Exemplo: exemplo@exemplo.com.br"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Senha
            <Input
              placeholder="No mínimo 5 caracteres"
              type="password"
              minLength="5"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <IncludeButton
            type="button"
            title="Criar conta"
            onClick={handleCreateUser}
          />

          <Link to="/">
            <p>Já tenho uma conta</p>
          </Link>
        </Form>
      </FormContainer>
    </Container>
  );
}
