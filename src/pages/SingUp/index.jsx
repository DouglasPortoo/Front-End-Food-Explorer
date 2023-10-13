import { Container, Form, FormContainer, ImageLogo } from "./styles";

import { IncludeButton } from "../../components/IncludeButton";
import { Input } from "../../components/Input";

import Logo from "../../assets/logo.svg";

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
            <Input placeholder="Exemplo: Maria da Silva" type="text" />
          </label>
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
          <IncludeButton type="submit" title="Criar conta" />
          <p>Já tenho uma conta</p>
        </Form>
      </FormContainer>
    </Container>
  );
}
