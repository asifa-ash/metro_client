import { createSlice } from "@reduxjs/toolkit";
import { login, logout, signup } from "../async/auth"
const auth=createSlice({
    name:"auth",
    initialState:{
      user:null
      // localStorage.getItem("user") === "undefined" || localStorage.getItem("user") === null
      //   ? null
      //   : JSON.parse(localStorage.getItem("user")),
    },
    extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      console.log(action.payload, "hhhhhhhnnnnnnnnnnbbbb");
       alert(action.payload?.message);
       if(action.payload?.message=="successfully login"){

         window.location.href = "/login";
       }
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload,"looo");
      state.user = action.payload.user;
    });

    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = null;
    });
  },
})
export default auth.reducer;