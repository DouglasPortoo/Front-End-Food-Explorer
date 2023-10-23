import styled from "styled-components";

export const Container = styled.div`
grid-area:header;

padding:1.5rem 7.6rem;

display: flex;
gap:2rem;
align-items: center;

background-color:${({ theme }) => theme.COLORS.Dark_600};

  @media (max-width:770px) {
    
  justify-content: space-between;
  
  }


> label {
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;

  border-radius: none;

}

>svg{
  cursor: pointer;
}

svg:hover{
  filter: brightness(0.9);
}

.list{
  display: none;
  @media (max-width:770px) {
    
    display: block;
  
  }
}

.Receipt{
  display: none;
  @media (max-width:770px) {
    
    display: block;
  
  }
}

.media{
  @media (max-width:770px) {
    
    display: none;
  
  }
}

`