import React, { useContext, useEffect, useState, useRef } from 'react'
import './note.css'
import notecontext from '../context/notecontex'
import { useNavigate } from "react-router-dom";
// import Noteitem from './Noteiteam'

export const Note = () => {
    const navigate = useNavigate();
    const context = useContext(notecontext)
    const { notes, addNote, deleteNote, fetchNote, editNote } = context
    //const [notes,setnote] = useState(noteintial)
    const [note, setNote] = useState({ title: "", description: "", tag: "", etitle: "", edescription: "", etag: "", id: "" })

    useEffect(() => {
        if(localStorage.getItem('token')){

            fetchNote()
        }
        else{
            navigate("/")
        }
    }, [])
    const closeup = useRef(null)

    const handleclick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
    }
    const handleupdate = (e) => {
        e.preventDefault()
        // console.log(note)
        editNote(note.id, note.etitle, note.edescription, note.etag)
        closeup.current.click()
    }

   

    const onChanges = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const updatenote = (note) => {
        // console.log(note)
        // ref.current.click()
        setNote({ id: note._id, etitle: note.title, edescription: note.description, etag: note.tag })
    }
    
    


    return (
        <div className='container' style={{marginTop:'5rem'}}>
            <div className="containn">
            {/* <hr className='hrstyle' style={{width:'100%',marginTop:'0',height:'.5rem'}} /> */}

               <h2 className='navbar-brand note my-2' style={{color:'black'}}>Enter your Secrets</h2>
            <hr className='hrstyle' style={{width:'80%',marginTop:'0',height:'.5rem'}} />

                <input type="text" className="input" id="title" name='title' aria-describedby="emailHelp" value={note.title} onChange={onChanges} placeholder="Enter title of your note" />
                <input type="text" className="input" id="description" name='description' onChange={onChanges} value={note.description} placeholder="Enter the Description"></input>
                <input type="text" className="input" id="tag" name='tag' onChange={onChanges} value={note.tag} placeholder="Enter the Tag"></input>

            <button className="btn2" style={{width:'21%'}} onClick={handleclick}>Submit</button>
            {/* <hr className='hrstyle bot' style={{width:'100%',height:'.5rem'}} /> */}

            </div>
            <div className="row">
                {
                    notes.map((note) => {

                        return (
                            <>

                                {/* <button type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">button</button> */}

                                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <hr className='hrstyle' style={{width:'100%',marginTop:'0',height:'.5rem'}} />
                                            <div className="text-center p-3">
                                                <h5 className="navbar-brand" id="exampleModalLabel" style={{ fontSize: '2.5rem',color:'black' }} >Edit Note</h5>


                                            </div>
                                            <div className='contain2'>
                                            <hr className='hrstyle' />

                                                <input type="text" className="input" id="etitle" name="etitle" style={{ width: '95%' }} aria-describedby="emailHelp"  onChange={onChanges} placeholder="Enter your title" />
                                                <input type="text" className="input" id="edescription" name="edescription" style={{ width: '95%' }} onChange={onChanges}  placeholder="Enter your Description" />
                                                <input type="text" className="input" id="etag" name="etag" style={{ width: '95%' }} onChange={onChanges}  placeholder="Enter your Tag" />

                                            <hr className='hrstyle' />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" ref={closeup} data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary" onClick={handleupdate} >Save changes</button>
                                            </div>
                                            <hr className='hrstyle' style={{width:'100%',marginBottom:'0',height:'.5rem'}} />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-sm-6 my-3">
                                    <div className="card my-4">
                                        <div className="card-body">
                                           
                                                <p style={{fontSize:'1.3rem'}} className="card-title text-center">{note.title}</p>
                                                <i className="fa-solid fa-file-pen position-absolute top-0 start-100 translate-middle" style={{ fontSize: '1.2rem' }} data-toggle="modal" data-target="#exampleModal" onClick={() => { updatenote(note) }}></i>
                                          
                                            <hr className='hrstyle' style={{width:'100%',height:'.2rem',marginTop:'0'}} />
                                            
                                            <p className="card-text">{note.description}</p>
                                            <span className="badge badge-pill position-absolute top-0 start-0" style={{backgroundColor:'orange'}}> {note.tag}</span>
                                            <i className="fa-solid fa-trash  position-absolute top-100 start-100 translate-middle" style={{ fontSize: '1.2rem' }} onClick={() => { deleteNote(note._id) }} ></i>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )

                    })
                }
            </div>

        </div>
    )
}


// onClick={deleteNote(note._id)}