import React from 'react'

export default function Alerts(props) {
  const capitalize=(word)=>{
    return word.charAt(0).toUpperCase()+ word.slice(1);
  }


  return (
    // div is added so that due to alert text box is not shifted
        <div style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>}
        </div>
    
  )
}
