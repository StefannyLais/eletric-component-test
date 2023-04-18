import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

    body,html,#root{
    width: 100%;

    font-size: 1rem;
    background: linear-gradient(90.04deg, #6B2C83 0.04%, #150E43 61.02%);
    font-family: 'Oswald', sans-serif;
    @media screen and (max-width: 500xp){
        padding-bottom: 20px;
    }

}
#root{
    overflow-y: auto;
    
    @media screen and (max-width: 800px){
        max-width: 90%;
        margin: 0 auto;
    }
}

img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
}

`

