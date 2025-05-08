
function extra() {
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Upload Document:
                <input type="file" onChange={handleFileChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default extra;




<div className="mb-3" >
    <label className="form-label text-secondary ms-3">Enter your hobby<span className='text-danger'>*</span> </label>

    <input type="text"  {...register("hobby", { required: { value: true, message: "Fill this up" } })} className="form-control B  " placeholder="Enter your hobbies" />

    {errors.hobby && <span className='text-danger'>{errors.hobby.message}</span>}
</div>