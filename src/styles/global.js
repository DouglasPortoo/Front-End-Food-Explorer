import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

:root{
font-size: 16px;

  @media (max-width:768px) {
    font-size: 12px;
  }
}

body {
background-color: ${({ theme }) => theme.COLORS.Dark_400};
color: ${({ theme }) => theme.COLORS.Light_100};

-webkit-font-smoothing: antialiased;

/* font-family: 'Roboto Slab', serif;  */
}

body, input, button, textarea {
/* font-family: 'Poppins', sans-serif; */
font-size: 1rem;
outline: none;
}

a {
text-decoration: none;
}

button, a {
cursor: pointer;
/* transition: filter 0.2s; */
}

button:hover, a:hover {
/* filter: brightness(0.9); */
}

button:disabled {
cursor: not-allowed;
}
`