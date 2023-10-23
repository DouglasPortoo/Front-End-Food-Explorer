import styled from "styled-components";

export const Container = styled.div`
/* height: 100vh;

display: grid;
grid-template-rows: 104px  1fr 77px;
grid-template-areas: 
"header"
"content"
"footer"; */
`

export const Banner = styled.div`

display: flex;
justify-content: center;

height: 15.9rem;
width: 100%;
border-radius: 0.5rem;
background-color: ${({ theme }) => theme.COLORS.Gradients_200};

margin-top: 9.37rem;
margin-bottom: 3.12rem;

@media (max-width:770px) {
    
  justify-content: flex-end;

  }

>img{
  position: absolute;
  margin-top: -9.37rem;
  left: 9.37rem;

  @media (max-width:770px) {
    width: 350px;
    height: 349px;

    margin-top: -7.90rem;
    left: 3.37rem;
    
  }
}


>div{
  display: flex;
  flex-direction:column;
  justify-content: center;
  
  margin-left: 31.2rem;

  @media (max-width:770px) {
    
    margin-left: 0;
    padding-right: 10px

  }

  >h1{
    color: ${({ theme }) => theme.COLORS.Light_300};
    font-family: 'Poppins', sans-serif; 
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 140%; 
  }

  >p{
    color: ${({ theme }) => theme.COLORS.Light_300};
    font-size: 1rem;
    font-weight: 400;
    line-height: 100%; 
  }


}
`

export const Carrossel = styled.div`
margin-top: 1.5rem;
margin-bottom: 3.12rem;
` 