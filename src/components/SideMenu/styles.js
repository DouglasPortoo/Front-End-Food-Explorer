import styled from "styled-components";

export const Container = styled.div`
display: none;

@media (max-width:770px) {
width: 100vw;
height: 100vh;
background-color: ${({ theme }) => theme.COLORS. Dark_400};
position: fixed;
z-index:3;

display: none;

>svg{
  cursor: pointer;
}
  
&[data-menu-is-open="true"]{
  display: flex;
  flex-direction: column;
}
}
`

export const Header = styled.header`
height: 150px;
background-color: ${({ theme }) => theme.COLORS.Dark_700};

display: flex;
gap: 16px;
align-items: center;
padding: 64px 28px 32px;

>p{
  font-size: 32px;
  font-family: 'Poppins', sans-serif;
}
`

export const Main = styled.main`
height: 100vh;
display: flex;
flex-direction: column;
gap:36px;

padding:28px 36px 10px;

>span{
  font-size: 32px;
  border-bottom: solid 1px white;
  padding-bottom: 2px;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
}

`