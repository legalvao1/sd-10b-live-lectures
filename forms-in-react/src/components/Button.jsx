import React from 'react'

class Button extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const { handleOnClick } = this.props
    return(
      <div>
        <button onClick={()=>console.log(this)}> THIS BUTTON</button>
      <button onClick = {handleOnClick} > Click</button>
      </div>
    )
  }
}

export default Button