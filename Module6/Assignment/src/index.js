import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      color: '',
      value: 'Portrait',
      message: '',
    }

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangeColor(e) {
    this.setState({
      color: e.target.value
    });
  }
  onChangeSize(e) {
    this.setState({
      value: e.target.value
    });
  }
  onChangeMessage(e) {
    this.setState({
      message: e.target.value
    });
  }

  onSubmit(e) {
    alert (
      "Name: " + this.state.name + 
      "\n Email: " + this.state.email + 
      "\n Color: " + this.state.color + 
      "\n Size: " + this.state.value +
      "\n Message: " + this.state.message
    );

    // this.setState({
    //   name: '',
    //   email: '',
    //   color: 'four+',
    //   value: 'Portrait',
    //   message: '',
    // })

    //e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Commission Form</h1>

        <p>If you would like a commission please fill out this form. I will get to work on your piece as soon as I can. Thank you so much for the support!</p>
        
        <label for="name"><h4>Name:</h4></label>
        <input 
          type="text" 
          required  
          placeholder="Your name..."
          value={this.state.name}
          onChange={this.onChangeName} />
        <br></br>

        <label for="email"><h4>Email:</h4></label>
        <input 
          type="text"
          required 
          placeholder="Your email..."
          value={this.state.email}
          onChange={this.onChangeEmail}/>
        <br></br>

        <label for="color"><h4>Number of colors:</h4></label>
          
          <label>
            <input 
              type="radio" 
              id="one" 
              name="color" 
              value="one"
              onChange={this.onChangeColor} />1 color</label>
          
          <label>
            <input 
              type="radio" 
              id="two" 
              name="color" 
              value="two" 
              onChange={this.onChangeColor}/>2 colors</label>
          
          <label>
            <input 
              type="radio" 
              id="three" 
              name="color" 
              value="three" 
              onChange={this.onChangeColor}/>3 colors</label>
          
          <label>
            <input 
              type="radio" 
              id="four" 
              name="color" 
              value="four+" 
              onChange={this.onChangeColor}/>4+ colors</label>
        <br></br>

        <label for="size"><h4>Choose the size of the piece you want:</h4></label>
          <select 
            id="size" 
            name="size" 
            value={this.state.value} 
            onChange={this.onChangeSize}>            
            <option 
              value="Portrait" 
              >Portrait</option>
            <option 
              value="Half Figure" 
              >Half Figure</option>
            <option 
              value="Full Figure" 
              >Full Figure</option>
        </select>
        <br></br>

        <label for="msg"><h4>Insert a message:</h4></label>
        <br></br>
        <textarea 
          rows="5" 
          cols="40" 
          maxlength="100" 
          value={this.state.message}
          onChange={this.onChangeMessage}
          placeholder="Leave an additional message..."></textarea>
        <br></br>

        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    );
  }
} 

ReactDOM.render(<MyForm />, document.getElementById('root'));
