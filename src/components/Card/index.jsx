import { Container, FavoriteButton, Frame } from "./styles";

import { Heart, Pencil } from "@phosphor-icons/react";

import { IncludeButton } from "../IncludeButton";
import { Stepper } from "../Stepper";

import { useAuth } from "../../hooks/auth";

import { Navigate } from "react-router-dom";

export function Card({ ...rest }) {
  const { user } = useAuth();

  function handleEdit(id) {
    Navigate(`/EditarPrato/${id}`);
  }

  return (
    <Container {...rest}>
      <FavoriteButton>
        {user.role === "admin" ? (
          <Pencil size={25} />
        ) : (
          <Heart size={20} color="white" />
        )}
      </FavoriteButton>
      <img src="https://github.com/DouglasPortoo.png" alt="" />
      <h1>Torradas de Parma</h1>
      <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
      <span>R$ 25,97</span>
      {user.role === "" && (
        <Frame>
          <Stepper />
          <IncludeButton title="Incluir" />
        </Frame>
      )}
    </Container>
  );
}
