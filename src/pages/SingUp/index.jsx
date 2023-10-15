import { Container, Form, FormContainer, ImageLogo } from "./styles";

import { IncludeButton } from "../../components/IncludeButton";
import { Input } from "../../components/Input";

import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export function SingUp() {
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
            <Input placeholder="Exemplo: Maria da Silva" type="text" required />
          </label>
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
          <IncludeButton type="submit" title="Criar conta" />

          <Link to="/">
            <p>Já tenho uma conta</p>
          </Link>
        </Form>
      </FormContainer>
    </Container>
  );
}
