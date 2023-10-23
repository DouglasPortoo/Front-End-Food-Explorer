import { Container } from "./styles";

import Logo from "../../assets/logo.svg";
import LogoAdmin from "../../assets/logoAdmin.svg";

import { MagnifyingGlass, SignOut, List,Receipt } from "@phosphor-icons/react";

import { OrderButton } from "../OrderButton";
import { Input } from "../Input";

import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

export function Header({setSearch, onOpenMenu}) {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  function handleNewPlate() {
    navigate(`/AdicionarPrato`);
  }

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <Container>
      <List className="list" size={35} onClick={onOpenMenu}/>
      {user.role === "admin" ? (
        <img src={LogoAdmin} alt="Logo" />
      ) : (
        <img src={Logo} alt="Logo" />
      )}
      <Receipt className="Receipt" size={35}/>
      <label className="media" htmlFor="search">Busque por pratos ou ingredientes</label>

      <Input
        className="media"
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        id="search"
        icon={MagnifyingGlass}
        onChange={(e) =>handleSearch(e) }
        
      />
      {user.role === "admin" ? (
        <OrderButton className="media" title="Novo prato" onClick={() => handleNewPlate()} />
      ) : (
        <OrderButton className="media" title="Meu pedido (0)" />
      )}

      <SignOut className="media" size={62} onClick={handleSignOut} />
    </Container>
  );
}
