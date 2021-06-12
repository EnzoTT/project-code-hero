import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: content-box;
}

*, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  word-break: normal;
}

html, body, #root {
  width: 100%;
  height: 100%;
}

body, header, code {
  font-family: 'PT Sans', sans-serif;
  color:var(--dark-smoke);
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 62.5%;
}

button {
    cursor: pointer;
    border:0;

}

//Váriaveis de cor
:root {
  --white: #FFFFFF;
  --snow:#F5F5F5;
  --dark-snow:#E5E5E5;
  --smoke:#8E8E8E;
  --dark-smoke:#555555;
  --dark-blue:#167ABC;
  --shadow: #00000033;
}
`;
