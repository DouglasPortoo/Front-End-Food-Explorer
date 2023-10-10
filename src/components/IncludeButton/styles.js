import styled from "styled-components";

export const Container = styled.button`
padding: 0.75rem 1.5rem;
background-color: ${({ theme }) => theme.COLORS.Tomato_100};
border-radius: 5px;
border: none;

color: ${({ theme }) => theme.COLORS.Light_100};

font-family: 'Poppins', sans-serif;
font-size: 0.8rem;
font-weight: 500;
line-height: 24px;

&:hover {
  background-color: ${({ theme }) => theme.COLORS.Tomato_200};
  } 

&:disabled {
  background-color: ${({ theme }) => theme.COLORS.Tomato_400};
  } 

`