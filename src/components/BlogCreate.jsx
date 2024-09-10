import React, { useState } from 'react'
import { useGetValues } from '../hooks/useGetValue'

const initialState = {
    title: "",
    desc: "",
    price: "",
    country: "",
    language: "uz",
}

const BlogCreate = () => {
    const {formData,handleChange} = useGetValues(initialState)

    const hanldeSubmit = (e)=>{
        e.preventDefault()
        console.log(formData);
    }
  return (
    <div>
        <h2>BlogCreate</h2>
        <form onSubmit={hanldeSubmit} action="">
            <input type="text" value={formData.title} onChange={handleChange} name='title' placeholder='title' />
            <input type="text" value={formData.desc} onChange={handleChange} name='desc' placeholder='desc' />
            <input type="number" value={formData.price} onChange={handleChange} name='price' placeholder='price' />
            <input type="text" value={formData.country} onChange={handleChange} name='country' placeholder='price' />
            <select value={formData.language} onChange={handleChange} name="language" id="">
                <option value="uz">uz</option>
                <option value="en">en</option>
            </select>
            <button>Create</button>
        </form>
    </div>
  )
}



export default BlogCreate

