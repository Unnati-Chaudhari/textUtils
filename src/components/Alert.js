import React from 'react'

function Alert(props) {
  return (
    
     props.alert && <div className="alert theme-warning" role="alert">
  <strong>{props.alert.type}</strong>: {props.alert.msg}
</div>
   
  )
}

export default Alert
