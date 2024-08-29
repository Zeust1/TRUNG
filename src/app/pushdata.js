import { createSlice } from '@reduxjs/toolkit'
export const getData = createSlice({
  name: 'productItems',
  initialState: {
    value: [],
  },
  reducers: {
    pushdata: (state, action) => {
      state.value.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { pushdata } = getData.actions
export const selectCount = (state) => state.data.value
export default getData.reducer

