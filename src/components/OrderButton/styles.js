import styled from "styled-components";

export const Container = styled.button`

padding: 12px 32px;

background-color: ${({ theme }) => theme.COLORS.Tomato_100};
color: ${({ theme }) => theme.COLORS.Light_100};

border: none;
border-radius: 5px;

display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
transition: filter 0.2s;

&:hover{
  filter: brightness(0.9);
}
`