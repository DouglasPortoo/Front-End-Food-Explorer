import styled from "styled-components";

export const Container= styled.div`
height: 100vh;

display: grid;
grid-template-rows: 104px  1fr 77px;
grid-template-areas: 
"header"
"content"
"footer";

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

margin-bottom: 115px;

>div{
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

.imagem{
  width: 700px;

  >div{
  display: flex;
  padding: 9px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.Dark_900} ;
  border:none;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.Light_100};
  font-family: 'Poppins', sans-serif; 
  font-size: 14px;
  font-weight: 500;
  line-height: 24px; 
  }

  div>input{
    display: none;
  }
}

label .tags {
display:flex;
gap: 16px;
background-color: ${({ theme }) => theme.COLORS.Dark_900} ;
color: ${({ theme }) => theme.COLORS.Light_500};
padding: 5px 8px;
border-radius: 5px;
}

.preço{
width: 200px;
input{
  padding: 16px;
}
}

textarea{
background-color: ${({ theme }) => theme.COLORS.Dark_900} ;
color: ${({ theme }) => theme.COLORS.Light_100};
border: none;
padding: 12px;
border-radius: 5px;
resize: none;

&::placeholder{
color: ${({ theme }) => theme.COLORS.Light_600};

font-size: 16px;
font-weight: 400;
line-height: 100%;
}

  &:focus{
    border: 1px solid white;
    border-radius: 5px;
    }
}

.button{
  display: flex;
  justify-content: end;
}

`