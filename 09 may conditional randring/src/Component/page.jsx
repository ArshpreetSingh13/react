import React from 'react'
import { useState } from 'react'

function page() {
    const [showBtn, setshowBtn] = useState(false);
    const [show, setshow] = useState(false)
    const [list, setlist] = useState([
        {
            title: "first",
            description: "This is first"
        },
        {
            title: "second",
            description: "This is second"
        }])





    return (
        <>
            <div className="container">
                <div className="m-4 d-flex flex-column  justify-content-center align-items-center">
                    <button className='btn btn-primary w-25' onClick={() => { setshowBtn(!showBtn) }}>Toggle</button>
                    {showBtn && <button onClick={() => { setshow(!show) }} className='btn m-3 btn-primary w-25' >View Cards</button>}

                </div>
                <div className='d-flex gap-3'>

                    {show && list.map((one, index) => {

                        return <div className="card" key={index} style={{width:150}}>

                            <div className="card-body">
                                <h5 className="card-title">{one.title}</h5>
                                <p className="card-text">{one.description}</p>

                            </div>
                        </div>
                    })}

                </div>
            </div>
        </>
    )
}

export default page