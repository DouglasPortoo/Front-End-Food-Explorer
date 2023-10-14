import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.Light_600};
  color: ${({ theme }) => theme.COLORS.Light_100};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.Light_600}` : "none"};

  border-radius: 10px;
  padding: 10px;

  > button { 
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.Light_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.Light_500};
  }

  > input {
    width: 100px;

    color: ${({ theme }) => theme.COLORS.Light_100};
    background: transparent;

    border: none;

    &::placeholder {
      color: gray
    }
  }
`