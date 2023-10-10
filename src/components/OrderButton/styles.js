import styled from "styled-components";

export const Container = styled.button`
width: 19.5rem;
padding: 0.75rem 2rem;

background-color: ${({ theme }) => theme.COLORS.Tomato_100};
color: ${({ theme }) => theme.COLORS.Light_100};

border: none;
border-radius: 5px;

display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
transition: filter 0.2s;

font-family: 'Poppins', sans-serif;
font-size: 0.8rem;
font-weight: 500;

&:hover{
  filter: brightness(0.9);
}
`