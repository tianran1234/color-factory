import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const AddColor = ({handleAdd}) => {
    const [form, updateForm] = useState({name: "", hex:"#ffffff"});

    function handleChange(e) {
        updateForm(f => ({ ...f, [e.target.name]: e.target.value }));
    }

    const navigate = useNavigate();

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAdd(form.name, form.hex);
        navigate('/colors')
    }



    return (
        <div className='NewColor'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Color Name:</label>
                <input type='text' id='name' name='name' placeholder='Enter color name'
                onChange={handleChange}></input>
                <label htmlFor='hex'>Color Value:</label>
                <input type='text' id='hex' name='hex' placeholder='Enter hex value' onChange={handleChange}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}



export default AddColor;