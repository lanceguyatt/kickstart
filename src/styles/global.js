import { createGlobalStyle } from 'styled-components'

import theme from './theme'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Topaz';
    src: local('Topaz'),
         url('/fonts/topaz.eot?#iefix') format('embedded-opentype'),
         url('/fonts/topaz.ttf') format('truetype'),
         url('/fonts/topaz.woff') format('woff'),
         url('/fonts/topaz.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    line-height: 1.125;
    font-family: ${theme.fonts.sansSerif};
    position: relative;
    min-height: 100%;
  }

  body {
    font-size: 1.6rem;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    cursor: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Y3Vyc29yPC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yIDBoMnYySDJWMHptMiAyaDR2Mkg0VjJ6bTQgMmg0djJIOFY0em00IDJoNHYyaC00VjZ6bTQgMmg0djJoLTRWOHptLTIgNGgydjJoLTJ2LTJ6bTIgMmgydjJoLTJ2LTJ6bTIgMmgydjJoLTJ2LTJ6bTIgMmgydjJoLTJ2LTJ6IiBmaWxsPSIjRUVDIi8+PHBhdGggZD0iTTAgMGgydjJIMFYwem0yIDJoMnYySDJWMnptMiAyaDR2NEg0VjR6bTIgNGg2djRINlY4em0yIDRoNHY0SDh2LTR6bTIgNGgydjRoLTJ2LTR6TTggNmg0djJIOFY2em00IDJoNHY0aC00Vjh6bTQgMmg0djJoLTR2LTJ6bS00IDJoMnYyaC0ydi0yem0yIDJoMnYyaC0ydi0yem0yIDJoMnYyaC0ydi0yem0yIDJoMnYyaC0ydi0yem0yIDJoMnYyaC0ydi0yeiIgZmlsbD0iI0U0NCIvPjxwYXRoIGQ9Ik0wIDJoMnYySDBWMnptMiAyaDJ2NEgyVjR6bTIgNGgydjRINFY4em0yIDRoMnY0SDZ2LTR6bTIgNGgydjRIOHYtNHptNC0yaDJ2MmgtMnYtMnptMiAyaDJ2MmgtMnYtMnptMiAyaDJ2MmgtMnYtMnptMiAyaDJ2MmgtMnYtMnoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+), default;
  }

  a {
    color: inherit;
    text-decoration: none;
    user-select: none;

    &:focus {
      outline: 0;
    }
  }

`

export default GlobalStyle
