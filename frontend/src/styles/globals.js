import { createGlobalStyle } from "styled-components"


/**
 * Global styles are applied through out the site in
 * a cascading fashion. Keep this styling minimal.
 */
const Globals = createGlobalStyle`
:root {
  --black: #000;
  --white: #FFF;
  --orange: #FFA800;
  --green: #138600;
}

body {
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--black);
  color:  var(--white);
  margin: 0;
}

.wrapper {
  max-width: 768px;
  margin: 0 auto;
}

a {
  color: white;
  text-decoration: none;
}
`

export default Globals