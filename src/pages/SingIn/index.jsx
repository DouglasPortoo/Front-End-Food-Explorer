import { Container, Form, FormContainer, ImageLogo } from "./styles";

import { IncludeButton } from "../../components/IncludeButton";
import { Input } from "../../components/Input";

import Logo from "../../assets/logo.svg";

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
            <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="email" />
          </label>
          <label>
            Senha
            <Input
              placeholder="No mínimo 6 caracteres"
              type="password"
              minlength="6"
            />
          </label>
          <IncludeButton type="submit" title="Entrar" />
          <p>Criar uma conta</p>
        </Form>
      </FormContainer>
    </Container>
  );
}
