/* eslint-disable react/prop-types */
import { Container, FavoriteButton, Frame } from "./styles";

import { Heart, Pencil } from "@phosphor-icons/react";

import { IncludeButton } from "../IncludeButton";
import { Stepper } from "../Stepper";

import { useAuth } from "../../hooks/auth";

import avatarPlaceholder from "../../../assets/semfoto.svg";
import { api } from "../../services/api";

export function Card({ data,onClickDetails,onClickEdit,...rest }) {
  const { user } = useAuth();


  return (
    <Container {...rest}>
      <FavoriteButton >
        {user && user.role === "admin" ? (
          <Pencil size={25} onClick={onClickEdit}/>
        ) : (
          <Heart size={20} color="white" />
        )}
      </FavoriteButton>
      <img src={data.img === null ? avatarPlaceholder:`${api.defaults.baseURL}/files/${data.img}`} onClick={onClickDetails} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <span>R$ {Number(data.price).toFixed(2)}</span>
      {user.role === "client" && (
        <Frame>
          <Stepper />
          <IncludeButton title="Incluir" />
        </Frame>
      )}
    </Container>
  );
}
