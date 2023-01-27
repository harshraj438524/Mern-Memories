
import React, { useState } from "react";
import notecontext from "./notecontex";


const NoteState = (prop) => {
  const noteintial = []

  const [notes, setnote] = useState(noteintial)

   
  const fetchNote = async () => {

        const response = await fetch(`http://localhost:5000/api/notes/fetchallnotes`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
          }
    
          
        });
        const json = await response.json()
    
        setnote(json)
       
      }

  




  const addNote = async (title, description, tag) => {

    const response = await fetch(`http://localhost:5000/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json();


    
    setnote(notes.concat(note))
  }

  
  const deleteNote = async (id) => {

    const response = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
        }


    });
    const json = await response.json()
  

    const newnote = notes.filter((note) => { return note._id !== id })
    setnote(newnote)
}






  const editNote = async (id, title, description, tag) => {


  
    const response = await fetch(`http://localhost:5000/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();


   let newnote =JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newnote.length; index++) {
      const element = newnote[index];
         if (element._id === id) {
        newnote[index].title = title
        newnote[index].description = description
        newnote[index].tag = tag
        break
      }

    }
    setnote(newnote)

  }

  return (
    <notecontext.Provider value={{ notes, addNote,setnote,fetchNote ,editNote,deleteNote}}>
      {prop.children}
    </notecontext.Provider>
  )

}
export default NoteState