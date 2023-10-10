import styled from "styled-components";

export const Container = styled.div`
padding: 4px 8px;
background-color: ${({ theme }) => theme.COLORS.Dark_1000};
border-radius: 5px;
border: none;

text-align: center;

color: ${({ theme }) => theme.COLORS.Light_100};

font-family: 'Poppins', sans-serif;
font-size: 0.8rem;
font-weight: 500;
line-height: 24px;


`