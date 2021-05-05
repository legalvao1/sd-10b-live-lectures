import React from 'react'

class Input extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const {type, value, handleChange} = this.props
    return(
      <input type={type} value={value} name={type} onChange={handleChange}/>
    )
  }
}

export default Input