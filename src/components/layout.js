import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    padding: 2rem 1rem;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;

    .heading {
      margin: 2rem auto;
    }

    .text {
      font-size: 17px;
      margin-bottom: 2.5rem;
    }

    .link {
      font-size: 18px;
      color: #007acc;
      text-decoration: none;
    }

    .email {
      margin: 2.5rem auto;
    }
  }
`

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Dusan Stamenkovic | Software Developer</title>
    </Helmet>
    <GlobalStyle />
    {children}
  </>
)

export default Layout
