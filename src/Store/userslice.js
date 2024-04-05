import { createSlice } from "@reduxjs/toolkit";
import { deleteusers, getusers, patchusers, postusers } from "./thunk/fetchusers";


const userSlice = createSlice({
    name:'users',
    initialState:{
        isLoading:false,data:null,error:null
    },
    extraReducers(builder){
 builder.addCase(getusers.pending,(state,action)=>{
    // console.log(action.payload);
    state.isLoading=true
 }),
// Http;// GET

 builder.addCase(getusers.fulfilled,(state,action)=>{
    state.isLoading=false
    // console.log(action.payload);
    state.data = action.payload
 }),
 builder.addCase(getusers.rejected,(state,action)=>{
    state.isLoading=false
    // console.log(action.payload);
    state.error = action.error
 }),

//  http;// POST 
builder.addCase(postusers.pending,(state,action)=>{
   state.isLoading=true
}),
builder.addCase(postusers.fulfilled,(state,action)=>{
    state.isLoading=false
   //  state.data = action.payload;
 }),
 builder.addCase(postusers.rejected,(state,action)=>{
    state.isLoading=false
    state.error = action.error;
 }),
// http;// delete request
builder.addCase(deleteusers.pending,(state,action)=>{
   state.isLoading=true
}),
builder.addCase(deleteusers.fulfilled,(state,action)=>{
    state.isLoading=false
   //  state.data = action.payload;
   let {id} = action.payload  // from that object target  only its id 
   if(id){
      state.data = state.data.filter(ele=> ele.id !== id)
   }
 }),
 builder.addCase(deleteusers.rejected,(state,action)=>{
    state.isLoading=false
    state.error = action.error;
 }),

//  http update patch
builder.addCase(patchusers.pending,(state,action)=>{
   state.isLoading=true
}),
builder.addCase(patchusers.fulfilled,(state,action)=>{
    state.isLoading=false
    state.data=state.data.map(ele=>{
      return ele.id === action.payload.id ? action.payload : ele
    })
 }),
 builder.addCase(patchusers.rejected,(state,action)=>{
    state.isLoading=false
    state.error = action.error;
 })
    }
})

export const usersReducer = userSlice.reducer