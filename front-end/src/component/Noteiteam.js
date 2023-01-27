import React, { useContext } from 'react'
import notecontext from '../context/notecontex'

export default function Noteiteam(prop) {

     const context = useContext(notecontext)
     // const { deleteNote } = context
     const {note} = prop

     return (
          <div className="col-md-3">
               <div className="card my-4">
                    <div className="card-body">
                         <div className="d-flex align-items-center">
                              <h5 className="card-title">{note.title}</h5>
                              <i className="fa-solid fa-trash mx-2" style={{ fontSize: '1.2rem' }} ></i>
                              <i className="fa-solid fa-file-pen" style={{ fontSize: '1.2rem' }}></i>
                         </div>
                         <p class="card-text">{note.description}</p>
                    </div>
               </div>
          </div>
     )
}

// onClick={deleteNote(note._id)}