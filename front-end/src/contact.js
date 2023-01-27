import React from 'react'
import './contact.css'
export default function contact() {
    return (

        <div className="position-absolute top-50 start-50 translate-middle my-2">

            <div className="contain">
                <div className="container heading">

                    <h2 className='heading'>Lets chat!</h2>
                </div>

                <hr className='hrstyle' />
                <input type="name" className="input2" placeholder="Enter your Name" />
                {/* <input type="address" className="input2" placeholder="Enter your Address" /> */}

                <input type="email" className="input2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                {/* <input type="number" className="input2" placeholder="Enter your number" /> */}
                <textarea className="text-area" id="exampleFormControlTextarea1"></textarea>
                {/* <input type="name" className="text-area" placeholder="Enter your Name" /> */}

                {/* <button type="button" className=" button_contact " style={{backgroundImage:'linearGradient(toRight, #FFB100 ,#FF7B54)'}}>Send</button> */}


                <button type="button" className="buttonContact but2" >Send Message</button>

            </div>
        </div>

    )
}
