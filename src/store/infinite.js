import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    infinite: [],
}

const infinite = createSlice({
    name: 'infinite',
    initialState,
    reducers:{
        setInfinite: (state, action) => {
            state.infinite = action.payload
        },
        appendInfinite: (state,action) => {
            state.infinite =  [...state.infinite, action.payload ]
        }
    }
})
export const {setInfinite ,appendInfinite} = infinite.actions
export default infinite.reducer