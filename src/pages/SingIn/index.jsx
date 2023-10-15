import { Container, Form, FormContainer, ImageLogo } from "./styles";

import { IncludeButton } from "../../components/IncludeButton";
import { Input } from "../../components/Input";

import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export function SingIn() {
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
            />
          </label>
          <label>
            Senha
            <Input
              placeholder="No mínimo 6 caracteres"
              type="password"
              minlength="6"
              required
            />
          </label>
          <IncludeButton type="submit" title="Entrar" />
          <Link to="/register">
            <p>Criar uma conta</p>
          </Link>
        </Form>
      </FormContainer>
    </Container>
  );
}
