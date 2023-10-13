import styled from "styled-components";

export const Container= styled.div`
h1{
  margin: 24px 0 32px;

color: ${({ theme }) => theme.COLORS.Light_300};
font-family: 'Poppins', sans-serif;
font-size: 32px;
font-weight: 500;
line-height: 140%;
}
`

export const Form= styled.form`
display: flex;
flex-direction: column;
gap: 32px;

div{
  display: flex;
  gap: 32px;
  
}

label{
display: flex;
flex-direction: column;
gap: 16px;
width: 100%;

color: ${({ theme }) => theme.COLORS.Light_400};
font-size: 16px;
font-weight: 400;
line-height: 100%;
}

>div>label>button{
display: flex;
padding: 12px 32px;
justify-content: center;
align-items: center;
gap: 8px;
background-color: ${({ theme }) => theme.COLORS.Dark_900} ;
border:none;
border-radius: 5px;
color: ${({ theme }) => theme.COLORS.Light_100};

}

.imagem{
  width: 700px;
}

label .tags {
  display:flex;
  gap: 16px;
  background-color: ${({ theme }) => theme.COLORS.Dark_900} ;
  color: ${({ theme }) => theme.COLORS.Light_500};
  padding: 5px;
  border-radius: 5px;
}

.preço{
  width: 200px;
}

textarea{
  background-color: ${({ theme }) => theme.COLORS.Dark_900} ;
  color: ${({ theme }) => theme.COLORS.Light_100};
  border: none;
  padding: 12px;
  border-radius: 5px;
}

.button{
  display: flex;
  justify-content: end;
}
`