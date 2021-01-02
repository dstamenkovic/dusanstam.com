import React from 'react'

const Home = () => (
  <>
    <h1 className="heading">Hi, I'm Dušan Stamenković</h1>
    <p className="text">I'm a software developer. Currently, I'm mostly working with React.js and Node.js.</p>

    <p>
      <a href="https://github.com/dstamenkovic" target="_blank" rel="noreferrer noopener" className="link">
        GitHub
      </a>
    </p>
    <p>
      <a
        href="https://www.linkedin.com/in/dusan-stamenkovic"
        target="_blank"
        rel="noreferrer noopener"
        className="link"
      >
        LinkedIn
      </a>
    </p>

    <p className="email">
      Email: &nbsp;
      <a href="mailto:dusanstameni@gmail.com" target="_blank" rel="noreferrer noopener" className="link">
        dusanstameni@gmail.com
      </a>
    </p>
  </>
)

export default Home
