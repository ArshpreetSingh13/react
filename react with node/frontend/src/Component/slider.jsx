import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

import "./slide.css"


function slider() {
    const { register,
        handleSubmit,
        watch, formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        try {
             axios.post("http://127.0.0.1:5000/api/form/form_add",data)
        } catch (error) {
            console.log(error);
            
        }



    }

   
    
    


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <h1 className=' text-center mt-5 text-primary'>Form</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label text-secondary ms-3">Your Name<span className='text-danger'>*</span> </label>
                                <input type="text" {...register("firstName", { required: { value: true, message: "Please Enter Your First Name" } })} className="form-control" placeholder="Enter your First Name" />
                            </div>

                            {errors.firstName && <span className='text-danger'>{errors.firstName.message}</span>}
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label text-secondary ms-3">Your Last Name</label>
                                <input type="text" {...register("lastName")} className="form-control" placeholder="Enter your last Name" />


                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label text-secondary ms-3">Your Email<span className='text-danger'>*</span> </label>

                                <input type="email" {...register("email", { required: { value: true, message: "email is required" } })} className="form-control" placeholder="Enter your Email" />

                                {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label text-secondary ms-3">Your Contact<span className='text-danger'>*</span> </label>
                                <input type="number" {...register("contect", { required: { value: true, message: "Fill this up" }, minLength: { value: 10, message: "Your numbers are less than 10" }, maxLength: { value: 10, message: "Your numbers are more than 10" } })} className="form-control" placeholder="Enter your phone number" />
                                {errors.contect && <span className='text-danger'>{errors.contect.message}</span>}
                            </div>
                        </div>



                    </div>
                  
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <div className="mb-3 d-flex justify-content-center">
                                <input type="submit" className='btn btn-primary' />

                            </div>
                        </div>
                    </div>

                </div>






            </form>
        </>
    )
}

export default slider