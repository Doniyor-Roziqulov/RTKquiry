import { useState } from "react";

export const useGetValues = (initialState)=>{
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e)=>{
        let {name,value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }
    return {formData, handleChange, setFormData}
}