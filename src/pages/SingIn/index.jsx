import { Container, Form, FormContainer, ImageLogo } from "./styles";

import { IncludeButton } from "../../components/IncludeButton";
import { Input } from "../../components/Input";

import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import { useState } from "react";

import { useAuth } from "../../hooks/auth";

export function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }
  return (
    <Container>
      <ImageLogo>
        <img src={Logo} alt="" />
      </ImageLogo>
      <FormContainer>
        <Form>
          <h1>Faça login</h1>
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
              placeholder="No mínimo 6 caracteres"
              type="password"
              minLength="6"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <IncludeButton type="button" title="Entrar" onClick={handleSignIn} />
          <Link to="/register">
            <p>Criar uma conta</p>
          </Link>
        </Form>
      </FormContainer>
    </Container>
  );
}
