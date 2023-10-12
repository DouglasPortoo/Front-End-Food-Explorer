import styled from "styled-components";

export const Container = styled.div`

background-color: none;
color: ${({ theme }) => theme.COLORS.Light_300};

display: flex;
justify-content: center;
align-items: center;
gap: 0.8rem;


>svg{
  cursor: pointer;
}

svg:hover{
  filter: brightness(0.9);
}

`