import React from 'react'
import classes from './HeaderPage.scss';

const HeaderPage = () => {
  return (
    <header className={classes.HeaderPage}>
      <div>
        <h1>Check our creativity</h1>
        <h2>We are the best and we know it!</h2>
      </div>
      <button>Ask for price</button>
    </header>
  )
}

export default HeaderPage;

