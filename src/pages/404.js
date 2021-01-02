import React from 'react'
import { Link } from 'gatsby'

const NotFound = () => (
  <>
    <h1 className="heading">Not found</h1>
    <p className="text">You just hit a route that doesn't exist... the sadness.</p>
    <Link to="/" className="link">
      go back home
    </Link>
  </>
)

export default NotFound
