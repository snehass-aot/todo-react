import React from 'react'

function Button({btnClass,btnText,onClick,style}) {
  return (
    <div>
      <button onClick={onClick} className={btnClass} style={style}> {btnText}</button>
   </div>
  )
}

export default Button
