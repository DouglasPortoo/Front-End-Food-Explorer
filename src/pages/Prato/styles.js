import styled from "styled-components";

export const Container = styled.div`
height: 100vh;

/* display: grid;
grid-template-rows: 104px  1fr 77px;
grid-template-areas: 
"header"
"content"
"footer"; */

`

export const Content = styled.div`

padding: 1.5rem 7.6rem;
height: 100vh;
`

export const Frame = styled.div`
display:flex;
gap:48px;
margin-top: 5.72rem;

@media (max-width:770px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

>img{
  width: 24.3rem;
  height: 24.3rem;
}
`

export const SubFrame = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap:24px;
width: 100%;

>h1{
color: ${({ theme }) => theme.COLORS.Light_300};
font-family: 'Poppins', sans-serif; 
font-size: 40px;
font-weight: 500;
line-height: 140%;
}

>p{
color: ${({ theme }) => theme.COLORS.Light_300};
font-family: 'Poppins', sans-serif; 
font-size: 24px;
font-weight: 400;
line-height: 140%; 
}
`

export const TagContainer = styled.div`
display: flex;
gap: 12px;

@media (max-width:770px) {
  display:grid;
  grid-template-columns: repeat(3,1fr);
}
`
export const ButtonsContainer = styled.div`
display: flex;
gap:33px;
margin-top: 48px;

@media (max-width:770px) {
  justify-content: center;
  
  >button{
    width: 100%;
  }

  >div{
    width: 100%;
  }
}
`