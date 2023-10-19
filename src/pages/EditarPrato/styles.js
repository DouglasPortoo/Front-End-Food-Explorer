import styled from "styled-components";

export const Container = styled.div`
height: 100vh;

display: grid;
grid-template-rows: 104px  1fr 77px;
grid-template-areas: 
"header"
"content"
"footer";

h1{
margin: 1.5rem 0 2rem;
color: ${({ theme }) => theme.COLORS.Light_300};
font-family: 'Poppins', sans-serif;
font-size: 2rem;
font-weight: 500;
line-height: 140%;
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 2rem;

margin-bottom: 7.25rem;

>div{
display: flex;
gap: 2rem; 
}

label{
display: flex;
flex-direction: column;
gap: 1rem;
width: 100%;

color: ${({ theme }) => theme.COLORS.Light_400};
font-size: 1rem;
font-weight: 400;
line-height: 100%;
}

.imagem{
width: 43rem;

>div{
display: flex;
padding: 0.5rem;
justify-content: center;
align-items: center;
gap: 0.5rem;
background-color: ${({ theme }) => theme.COLORS.Dark_900} ;
border:none;
border-radius: 0.5rem;
color: ${({ theme }) => theme.COLORS.Light_100};
font-family: 'Poppins', sans-serif; 
font-size: 0.8rem;
font-weight: 500;
line-height: 1.5rem; 
}

  div>input{
    display: none;  
  }
}

label .tags {
display:flex;
gap: 1rem;
background-color: ${({ theme }) => theme.COLORS.Dark_900} ;
color: ${({ theme }) => theme.COLORS.Light_500};
padding: 0.5rem 0.5rem;
border-radius: 0.5rem;
}

.preço{
width: 12.5rem;
  input{
    padding: 1rem;
  }
}

textarea{
background-color: ${({ theme }) => theme.COLORS.Dark_900} ;
color: ${({ theme }) => theme.COLORS.Light_100};
border: none;
padding: 0.75rem;
border-radius: 0.5rem;
resize: none;

&::placeholder{
color: ${({ theme }) => theme.COLORS.Light_600};
font-family: 'Poppins',sans-serif;

font-size: 1rem;
font-weight: 400;
line-height: 100%;
}

  &:focus{
    border: 1px solid white;
    border-radius: 0.5rem;
    }
}

.button{
display: flex;
justify-content: end;

  button:first-child{
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.COLORS.Dark_800} ;
    border: none;
    color: ${({ theme }) => theme.COLORS.Light_100};
    padding: 0.75rem 1.5rem;
    transition: filter 0.2s; 

    font-family: 'Poppins',sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 24px;

      &:hover {
        filter: brightness(0.9); 
}

  }
}

select{
width: 100%;
padding: 12px;
color: ${({ theme }) => theme.COLORS.Light_100};
background-color: ${({ theme }) => theme.COLORS.Dark_900} ;

border: 0;
border-radius: 5px;
}

`