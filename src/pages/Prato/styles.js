import styled from "styled-components";

export const Container = styled.div`
height: 100vh;

display: grid;
grid-template-rows: 104px  1fr 77px;
grid-template-areas: 
"header"
"content"
"footer";

`

export const Frame = styled.div`
display:flex;
gap:48px;
margin-top: 42px;
`

export const SubFrame = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap:24px;

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
`
export const ButtonsContainer = styled.div`
display: flex;
gap:33px;
margin-top: 48px;
`