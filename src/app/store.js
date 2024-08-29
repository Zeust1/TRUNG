import { configureStore } from '@reduxjs/toolkit'
import getData from './pushdata'


export default configureStore({
  reducer: {
    data: getData
  },
})