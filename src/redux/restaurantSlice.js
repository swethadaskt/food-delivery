import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchRestaurant = createAsyncThunk('restaurantList/fetchRestaurant',()=>{
    
  const result =  axios.get('/restaurant.json').then(Response=>Response.data.restaurants)
  console.log(result);
  return result
})



const restaurantSlice = createSlice({
    name: 'restaurantList',
    initialState:{
        loading:false, //pending state
        allrestaurant : [], // resolve state
        searchrestaurant :[],
        error:"" // reject
    },
    extraReducers:(builder)=>{
        //builder holds value/ respones from thunk
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading=false
            state.allrestaurant = action.payload
            state.searchrestaurant=action.payload
            state.error = ""

    })
    builder.addCase(fetchRestaurant.rejected,(state,action)=>{
        state.loading=false
        state.allrestaurant = ""
       state.error = action.error.message
    })
   },
   reducers:{
    search :(state, action)=>{
      state.allrestaurant = state.searchrestaurant.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))

    }
   }
})
export const{search} = restaurantSlice.actions
export default restaurantSlice.reducer