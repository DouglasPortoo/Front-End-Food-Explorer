import { Container, Header, Main } from "./styles";

import { X, MagnifyingGlass } from "@phosphor-icons/react";

import { Input } from "../Input";
// import { Footer } from "../Footer";

import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

export function SideMenu({setSearch,menuIsOpen, onCloseMenu}) {
  const { user,signOut } = useAuth();

  const navigate = useNavigate();

  function handleNewPlate() {
    navigate(`/AdicionarPrato`);
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleSignOut() {
    signOut();
    navigate("/");
  }
  return (
    <Container data-menu-is-open={menuIsOpen} >
      <Header>
        <X size={40} onClick={onCloseMenu}/>
        <p>Menu</p>
      </Header>
      <Main>

        {setSearch && <Input 
          type="text"
          placeholder="Busque por pratos ou ingredientes"
          id="search"
          icon={MagnifyingGlass}
          onChange={(e) =>handleSearch(e) }
        />}
        
        {user.role === "admin" && (
        <span onClick={handleNewPlate}  >Novo Prato</span>
      )}
        <span onClick={handleSignOut} >Sair</span>
      </Main>
      {/* <Footer /> */}
    </Container>
  );
}
