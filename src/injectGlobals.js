import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

injectGlobal`
  ${styledNormalize}
  
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`
