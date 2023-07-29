import {  createSlice } from '@reduxjs/toolkit';


export const appSlice = createSlice({
  name: 'app',
  initialState: {
    app:null,
    channelId : null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setChannelInfo : (state,action) => {
     state.channelId = action.payload.channelId;
     state.channelName = action.payload.channelName;
      
    },
    // logout : (state) => {
    // state.app = null;
    // }
    
  },

});

export const { setChannelInfo} = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName= (state) => state.app.channelName;



export default appSlice.reducer;
