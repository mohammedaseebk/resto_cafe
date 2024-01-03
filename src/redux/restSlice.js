import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//api call using Thunk
 export const fetchRestaurant  = createAsyncThunk('restaurantList/fetchRestaurant',()=>{
  const result =  axios.get('/restaurant.json').then(response=>response.data.restaurants)
  console.log(result);
  return result
})

const restSlice = createSlice({
    name: 'restaurantList',
    initialState :{
        loading:false, //pending
        allRestaurant:[], //resolve
        searchRestaurant:[],
        error:"" //reject
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchRestaurant.fulfilled,(state, action)=>{
            state.loading = false
            state.allRestaurant  = action.payload
            state.searchRestaurant  = action.payload
             state.error = ""
        })
        builder.addCase(fetchRestaurant.rejected,(state, action)=>{
            state.loading = false
            state.allRestaurant =""
            state.error = action.error.message
        })
    },
    reducers : {
        search :(state, action)=>{
         state.allRestaurant= state.searchRestaurant.filter(item=> item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
   

    
})
export const {search} = restSlice.actions

export default restSlice.reducer