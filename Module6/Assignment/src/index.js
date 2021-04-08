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
      type: '',
      message: '',
    }

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
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
  onChangeType(e) {
    this.setState({
      type: e.target.value
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
      "\n Type: " + this.state.type +
      "\n Message: " + this.state.message
    );

    this.setState({
      name: '',
      email: '',
      color: false,
      value: 'Portrait',
      type: false,
      message: '',
    })

    e.preventDefault();
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
          <input 
            type="radio" 
            id="one" 
            name="color" 
            value="one"
            onChange={this.onChangeColor} />
          <label for="one">1 color</label>
          <input 
            type="radio" 
            id="two" 
            name="color" 
            value="two" 
            onChange={this.onChangeColor}/>
          <label for="two">2 colors</label>
          <input 
            type="radio" 
            id="three" 
            name="color" 
            value="three" 
            onChange={this.onChangeColor}/>
          <label for="three">3 colors</label>
          <input 
            type="radio" 
            id="four" 
            name="color" 
            value="four+" 
            onChange={this.onChangeColor}/>
          <label for="four">4+ colors</label>
        <br></br>

        <label for="size"><h4>Choose the size of the piece you want:</h4></label>
          <select 
            id="size" 
            name="size" 
            value={this.state.value} 
            onChange={this.onChangeSize}>            <option 
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

        <label for="request"><h4>Choose the types of piece you would like to recieve:</h4></label>
        <br></br>
        
        <label for="physical"><h5>Physical Pieces</h5></label>
          <br></br>
            <input 
              type="checkbox" 
              id="physical1" 
              name="physical1" 
              value="poster"
              onChange={this.onChangeType}/>
            <label for="physical1">Poster</label> 
            <br></br>
            <input 
              type="checkbox" 
              id="physical2" 
              name="physical2" 
              value="sticker" 
              onChange={this.onChangeType}/>
            <label for="physical2">Sticker</label> 
            <br></br>
            <input 
              type="checkbox" 
              id="physical3" 
              name="physical3" 
              value="pin" 
              onChange={this.onChangeType}/>
            <label for="physical3">Pin</label> 
          <br></br>

          <label for="digital"><h5>Digital Pieces</h5></label>
          <br></br>
            <input 
              type="checkbox" 
              id="digital1" 
              name="digital1" 
              value="pdf" 
              onChange={this.onChangeType}/>
            <label for="digital1">Pdf</label>
            <br></br>
            <input 
              type="checkbox" 
              id="digital2" 
              name="digital2" 
              value="png" 
              onChange={this.onChangeType}/>
            <label for="digital2">Png</label>
            <br></br>
            <input 
              type="checkbox" 
              id="digital3" 
              name="digital3" 
              value="gif" 
              onChange={this.onChangeType}/>
            <label for="digital3">Gif</label>
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

          <input type="submit" value="Submit" ></input>
      </form>
    );
  }
} 

ReactDOM.render(<MyForm />, document.getElementById('root'));
