
import { useState } from "react";
import React from 'react';

function Forms() {

 

    let [InputValue, setInpurValue] = useState('')



    const store = (e) => {

        const name = e.target.name
        const value = e.target.value

        setInpurValue((preData) => ({
            ...preData,
            [name]: [value]
        }))
    };



    return (

        <>

            <div className="container">
                <div className='m-5 text-success'>
                    <h1 className='text-center'>User Input form</h1>
                </div >

                <div className="px-5">
                    <div className="container px-4 ">

                        <form onSubmit={setInpurValue(store())}>


                            <div className="row gx-5">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label"  >Name</label>
                                        <input type="text" className="form-control" name="name" aria-describedby="emailHelp" />

                                    </div>

                                </div>


                                <div className="col">

                                    <div className="mb-3">
                                        <label
                                            className="form-label">Email </label>
                                        <input type="email" className="form-control" name="email" aria-describedby="emailHelp" />

                                    </div>

                                </div>
                            </div>
                            <div className="row gx-5">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label">Gender</label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="Gender" id="flexRadioDefault1" value={"Male"} />
                                            <label className="form-check-label" >
                                                Male
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="Gender" id="flexRadioDefault2" value={"Female"} />
                                            <label className="form-check-label" >
                                                Female
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="col">

                                    <div className="mb-3">
                                        <label
                                            className="form-label">Contact</label>
                                        <input type="number"
                                            name="contact"
                                            className="form-control" aria-describedby="emailHelp" />

                                    </div>

                                </div>
                            </div>
                            <div className="row gx-5">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label">DOB</label>
                                        <input type="date"
                                            name="DOB"
                                            className="form-control" aria-describedby="emailHelp" />

                                    </div>

                                </div>
                                <div className="col">

                                    <div className="mb-3">
                                        <label className="form-label">State</label>
                                        <select className="form-select" aria-label="Default select example"
                                            name="State"

                                        >
                                            <option>Select State</option>
                                            <option>Andhra Pradesh</option>
                                            <option>Arunachal Pradesh</option>
                                            <option>Assam</option>
                                            <option>Bihar</option>
                                            <option>Chhattisgarh</option>
                                            <option>Goa</option>
                                            <option>Gujarat</option>
                                            <option>Haryana</option>
                                            <option>Himachal Pradesh</option>
                                            <option>Jharkhand</option>
                                            <option>Karnataka</option>
                                            <option>Kerala</option>
                                            <option>Madhya Pradesh</option>
                                            <option>Maharashtra</option>
                                            <option>Manipur</option>
                                            <option>Meghalaya</option>
                                            <option>Mizoram</option>
                                            <option>Nagaland</option>
                                            <option>Odisha</option>
                                            <option>Punjab</option>
                                            <option>Rajasthan</option>
                                            <option>Sikkim</option>
                                            <option>Tamil Nadu</option>
                                            <option>Telangana</option>
                                            <option>Tripura</option>
                                            <option>Uttar Pradesh</option>
                                            <option>Uttarakhand</option>
                                            <option>West Bengal</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div className="row gx-5 text-center">
                                <div className="col">
                                    <input type="submit" />
                                </div>


                            </div>

                        </form>



                    </div>
                </div>
            </div>


        </>

    )
}

export default Forms
