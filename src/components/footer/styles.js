import styled from "styled-components";

export const Container = styled.div`
grid-area:footer;

padding:1.5rem 7.6rem;

display: flex;
justify-content: space-between;
align-items: center;

background-color:${({ theme }) => theme.COLORS.Dark_600};

p{
font-family: 'Poppins',sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; 
}
`