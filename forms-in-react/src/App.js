import React from 'react'
import Input from './components/Input'
import Button from './components/Button'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      contador: 0
    }
   // this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange = ({target: {value, name}}) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.validatePassword();
  }

  handleOnClick = () =>{
    console.log(this);
  }

  validatePassword = () => {
    const {password} = this.state
    if(password.includes('sextou'))
      alert('É nois')
  }

  render(){
    const {password} = this.state

    return (
      <main >
        <form onSubmit={this.handleSubmit}>
          <Input type="email"/>
          <Input type="password" value={password} handleChange={this.handleChange} />
        {/*   <input type="email" placeholder="email" name="email" onChange={this.handleChange} />
          <input type="password" placeholder="sextou" name="password" onChange={this.handleChange}/> */}
          <button type="submit">Login</button>
          <Button handleOnClick= {this.handleOnClick} />
        </form>
      </main>
   );
  }
}

export default App;
