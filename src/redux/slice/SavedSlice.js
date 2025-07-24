import {createSlice} from '@reduxjs/toolkit';


export const SavedSlice = createSlice({
    name : 'saved',
    initialState: {
    savedJobs: [],
  },
  reducers: {
    add : (state, action)=>{
        const alreadySaved = state.savedJobs.find(
        (job) => job.slug === action.payload.slug
      );
      if (!alreadySaved) {
        state.savedJobs.push(action.payload);
      }
    } ,
    remove : (state, action)=>{
        state.savedJobs = state.savedJobs.filter(
        (job) => job.slug !== action.payload
      );
    }
  }
})

export const { add, remove } = SavedSlice.actions;
export default SavedSlice.reducer;
