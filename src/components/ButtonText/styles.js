import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  

  button {
    display: flex;
    align-items: center;
    gap:2px;

    border:none;
    color: ${({ theme }) => theme.COLORS.Light_100};
    background: transparent;

    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
`