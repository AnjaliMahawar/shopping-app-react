import { createSlice } from '@reduxjs/toolkit'

const cartSlice= createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
       add(state:any,action:any){
         state.push(action.payload)
       },
       remove(state,action){
        return state.filter((item:any)=>item.id!==action.payload)
       },
         wishAdd(state:any,action:any){
         state.push(action.payload)
       },
    }

})

export const{add,remove,wishAdd}=cartSlice.actions
export default cartSlice.reducer