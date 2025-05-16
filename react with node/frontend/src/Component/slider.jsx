import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import "./slide.css"


function slider() {
    const { register,
        handleSubmit,
        watch, formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

    }

    const [children, setchildren] = useState([

    ])
    function add() {
        const newChild = `Hobby ${children.length + 1}`;
        setchildren([...children, newChild])
       
        
        
    }
    
    function remove(){
        if(children.length>0){
            setchildren(children.slice(0,-1))
           console.log(children);
           
            
        }
    }

    useEffect(() => {
      
    
      return () => {
        add()
      }
    }, [])
    
    


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <h1 className=' text-center mt-5 text-primary'>Form</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label text-secondary ms-3">Your Name<span className='text-danger'>*</span> </label>
                                <input type="text" {...register("FirstName", { required: { value: true, message: "Please Enter Your First Name" } })} className="form-control" placeholder="Enter your First Name" />
                            </div>

                            {errors.FirstName && <span className='text-danger'>{errors.FirstName.message}</span>}
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label text-secondary ms-3">Your Last Name</label>
                                <input type="text" {...register("SecondName")} className="form-control" placeholder="Enter your last Name" />


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
                                <input type="number" {...register("Contact", { required: { value: true, message: "Fill this up" }, minLength: { value: 10, message: "Your numbers are less than 10" }, maxLength: { value: 10, message: "Your numbers are more than 10" } })} className="form-control" placeholder="Enter your phone number" />
                                {errors.Contact && <span className='text-danger'>{errors.Contact.message}</span>}
                            </div>
                        </div>



                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 ">
                            <label className="form-label text-secondary ms-3">Enter your hobby<span className='text-danger'>*</span> </label>
                            {
                                children.map((child, index) => (




                                   <div className="mb-3" key={index} >
                                        

                                        <input type="text"  {...register(child, { required: { value: true, message: "Fill this up" } })} className="form-control B  " placeholder="Enter your hobbies" />

                                        {errors.hobby && <span className='text-danger'>{errors.hobby.message}</span>}
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-md-3">
                            <button type='button' onClick={add} className='btn btn-primary'>+</button>
                            <button type='button' onClick={remove}  className='btn btn-primary ms-4'>-</button>

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