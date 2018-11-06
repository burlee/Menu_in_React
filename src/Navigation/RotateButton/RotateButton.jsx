import React from 'react'
import classes from './RotateButton.scss'

const RotateButton = ({toggleMenuFn, menuIsOpen}) => {
  let rotateDeg = menuIsOpen ? 45 : 0;
  let top = menuIsOpen ? 8 : 0;
  return (
    <div className={classes.RotateButton} onClick={toggleMenuFn}>
      <div style={{transform: `rotate(${rotateDeg}deg)`, top: `${top}px`, position: 'relative'}}></div>
      {menuIsOpen ? null : <div></div>}
      <div style={{transform: `rotate(${-rotateDeg}deg)`, top: `${top}px`}}></div>
    </div>
  )
}

export default RotateButton;
