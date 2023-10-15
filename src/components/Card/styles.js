import styled from "styled-components";

export const Container = styled.div`
width: 304px;
background-color: ${({ theme }) => theme.COLORS.Dark_200};

border-radius: 8px;
border: 1px solid ${({ theme }) => theme.COLORS.Dark_300};
padding: 1.5rem;

display: flex;
flex-direction: column;
align-items: center;
text-align: center;
gap: 0.9rem;

span{
  font-size: 32px;
  font-weight: 400;
  line-height: 160%;

  color: ${({ theme }) => theme.COLORS.Cake_100};

}

cursor: pointer;
transition: all .2s ease-in-out;

&:hover{

-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
transform: scale(1.1);
}

>img{
  width: 11rem;
  height: 11rem;
}

`

export const Frame = styled.div`
display: flex;
gap:1rem;
`

export const FavoriteButton = styled.button`
position: relative;
left: 120px;
cursor: pointer;
transition: all .2s ease-in-out;

background: none;
border: none;
color:white;

&:hover{

-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
transform: scale(1.1);
}
`