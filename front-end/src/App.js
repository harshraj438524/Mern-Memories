
import './App.css';
import Navbar from './navbar.js'
import Signin from './signin.js'

import Signup from './signup';
import { Routes, Route } from "react-router-dom"
import Contact from './contact';
import NoteState from './context/notestate';
import { Note } from './component/note';

function App() {
  //   const myStyle={
  //     backgroundImage: "url(/src/back.jpg)",
  //     height:'100vh',
  //     // marginTop:'-70px',

  //     backgroundSize: 'cover',
  //     backgroundRepeat: 'no-repeat',
  // };
  return (
    
        <NoteState>
    <div className="App">
      <Navbar />
      {/* <Signin/> */}
      
      
      <Routes>
        <Route path='/note' element={<Note/>}/>
        <Route path="/" element={ <Signin/> } />
        <Route path="Signup" element={ <Signup/> } />
        <Route path="contact" element={<Contact/> } />
      </Routes>


    </div>
      </NoteState>
  );
}

export default App;
