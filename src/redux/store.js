import restSlice from '../redux/restSlice'
const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer:{
        restSlice
    }
})
 
export default store