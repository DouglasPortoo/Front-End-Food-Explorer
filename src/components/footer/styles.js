import styled from "styled-components";

export const Container = styled.div`
grid-area:footer;

padding:1.5rem 7.6rem;

display: flex;
justify-content: space-between;
align-items: center;

background-color:${({ theme }) => theme.COLORS.Dark_600};

`