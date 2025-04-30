import React from 'react'

function nav(props) {
  return (
      <div style={{ backgroundColor: props.ColorName ,height:300,
        textAlign:'center'
       }} >{props.ColorName}</div>
  )
}

export default nav