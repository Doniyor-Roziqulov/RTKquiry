import { createSlice } from "@reduxjs/toolkit"
import { saveStorage, getStorage } from "../../helpers"
const counter = createSlice({
    name: "counter",
    initialState: {
        value: +getStorage("count") || 9
    },
    reducers:{
        inc: (state, action)=>{
            state.value += action.payload
            saveStorage("count", state.value)
        },
        dec(state){
            state.value -= 1
            saveStorage("count", state.value)
        },
        reset(state){
            state.value = 0
            saveStorage("count", state.value)
        }
    }
})
export const { inc, dec, reset } = counter.actions
export default counter.reducer
