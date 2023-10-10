import styled from "styled-components";

export const Container = styled.div`
grid-area:header;

padding:1.5rem 7.6rem;

display: flex;
gap:2rem;
align-items: center;

background-color:${({ theme }) => theme.COLORS.Dark_600};

> label {
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;

}

>svg{
  cursor: pointer;
}

svg:hover{
  filter: brightness(0.9);
}

`