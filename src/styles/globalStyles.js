import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        position: relative;
        width: 100vw;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 1rem;
    }
    #root {
        display: flex;
        flex-direction: column;
    }
    #modals{
        z-index: 1;
        position: absolute;
        display: flex;
        flex-direction: column;
        width: auto;
        height: auto;
    }
`
