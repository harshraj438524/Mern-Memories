
import React, { Component } from 'react';
import backGround from './back.jpg'
  
class App extends Component {
  render() {
    const myStyle={
        backgroundImage: 
    "url('https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=600')",
        height:'100vh',
        // marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
        <h1> geeksforgeeks </h1>
      </div>
    );
  }
}
   
export default App;