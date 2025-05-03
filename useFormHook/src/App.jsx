import { useForm } from "react-hook-form";


function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = data => console.log(data);





  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center text-primary mt-4 pt-5">Fill the Form</h2>
       <div className="container justify-content-center mt-5  ">
          <div className="row ">
            <div className="col-6">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Enter Your name</span>
                <input type="text" {...register("name", { required: true, })} className="form-control" placeholder="Username"  />
              </div>
            </div>
            <div className="col-6">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Enter Your email</span>
                <input type="email" {...register("email", { required: true, })}className="form-control" placeholder="Username"  />
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-6">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Enter Your Number</span>
                <input type="number" {...register("contact", { required: true, minLength: 10, maxLength: 10 })} className="form-control" placeholder="Username" />
              </div>
            </div>
            <div className="col-6">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Enter Your DOB</span>
                <input type="date" {...register("date", { required: true, })} className="form-control" placeholder="Username" />
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-6">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="Gender" value={"male"} {...register("Gender", { required: true })} />
                  <label className="form-check-label" >
                    Male
                  </label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="radio" name="Gender" value={"Female"}{...register("Gender", { required: true })}  />
                  <label className="form-check-label"  >
                   Female
                  </label>
              </div>
            </div>

            <div className="col-6">
              <select className="form-select" {...register("state",{required:true})} >
                <option value="">-- Select State --</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
          </div>

       </div>


        {/* <input type="text" {...register("name", { required: true, })} />
        <input type="email" {...register("email", { required: true, })} />
        <input type="number" {...register("contact", { required: true, minLength:10,maxLength:10 })} />
        <input type="radio" name="Gender" value={"male"} {...register("Gender", { required: true})} />
        <input type="radio" name="Gender"  value={"Female"}{...register("Gender", { required: true})} /> */}

        

          <div className="row">
            <div className="col-12 d-flex justify-content-center">
            <input className="btn btn-primary mt-4" type="submit" />
            </div>
          </div>


        
      </form>

    </>
  )
}

export default App
