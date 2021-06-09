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
  font-family: "Co Text", sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
    cursor: pointer;
    border:0;

}

//Váriaveis de cor
:root {
  --light-grey: #fcfcfc;
  --background-grey: #f2f2f2;
  --primary-white: #FFFFFF;
  --primary-grey: #707070;
  --primary-orange: #DE653E;
  --primary-purple: #5E518F;
  --secondary-purple: #44407E; 
  --primary-red: #FF3F2F;
  --secondary-grey: #B2B2B2;
  --primary-pink: #D91056;
  --primary-blue: #455CC7;
  --primary-yellow: #FFD281;
}
`;
