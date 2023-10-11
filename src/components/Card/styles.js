import styled from "styled-components";

export const Container = styled.div`
width: 304px;
/* height: 28rem; */
background-color: ${({ theme }) => theme.COLORS.Dark_200};

border-radius: 8px;
border: 1px solid ${({ theme }) => theme.COLORS.Dark_300};
padding: 1.5rem;

display: flex;
flex-direction: column;
align-items: center;
text-align: center;
gap: 0.9rem;

>img{
  width: 11rem;
  height: 11rem;
}

`

export const Frame = styled.div`
display: flex;
gap:1rem;
`

export const FavoriteButton= styled.button`
position: relative;
left: 120px;
cursor: pointer;

background: none;
border: none;
color:white;
`