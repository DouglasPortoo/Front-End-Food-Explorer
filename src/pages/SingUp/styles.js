import styled from "styled-components"

export const Container = styled.div`
height: 100vh;

display: flex ;
justify-content: center;
align-content: center;

`
export const ImageLogo = styled.div`
width: 50%;

display: flex;
justify-content: center;
align-items: center;

img{
width: 100%;
height: 80px
}
` 

export const Form = styled.form`
background-color: ${({ theme }) => theme.COLORS.Dark_600};
padding: 64px;
border-radius: 16px;
width: 50%;


display: flex;
flex-direction: column;
gap: 32px;

>h1{
color: ${({ theme }) => theme.COLORS.Light_100};
text-align: center;

font-family: 'Poppins', sans-serif; 
font-size: 32px;
font-weight: 500;
line-height: 140%;
}

>label{

color: ${({ theme }) => theme.COLORS.Light_400};


font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 100%;

display: flex;
flex-direction: column;
gap: 8px;
}

>a, p{
text-align: center;

color: ${({ theme }) => theme.COLORS.Light_100};

font-family: 'Poppins', sans-serif; 
font-size: 14px;

font-weight: 500;
line-height: 24px;

cursor: pointer;
}

` 

export const FormContainer = styled.div`
width: 50%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
` 