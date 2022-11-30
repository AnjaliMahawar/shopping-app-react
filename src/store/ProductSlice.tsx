import { createSlice } from '@reduxjs/toolkit'

const ProductSlice= createSlice({
    name: 'product',
    initialState:[],
    reducers:{
       adds(state:any,action:any){
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
export const{adds,remove}=ProductSlice.actions
export default ProductSlice.reducer
