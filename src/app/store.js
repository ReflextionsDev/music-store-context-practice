import { configureStore } from "@reduxjs/toolkit";
// import shoppingCartReducer from '../features/shoppingCartSlice'



const userReducer = (user = null, action) =>{
     switch (action.type) {
         case 'SIGN_IN': {
             const { user } = action.payload;
             return user;
         }
         case 'SIGN_OUT': {
             return null;
         }
     
         default:
             return user;
     } 
}


export default configureStore({
    reducer: {
        // shoppingCart: shoppingCartSlice,
        user: userReducer
    }
})