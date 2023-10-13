import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 5px;


  background-color: ${({ theme }) => theme.COLORS.Dark_900} ;
  color: ${({ theme }) => theme.COLORS.Light_500};


  > input {
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.Light_100};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.Light_500};
    }

    &:focus{
      border: 1px solid white;
      border-radius: 5px;
    }
  }

  > svg {
    margin-left: 16px;
  }
`