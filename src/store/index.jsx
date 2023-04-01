import { configureStore } from '@reduxjs/toolkit'
import userNameSlice from './slices/useName.slice'

export default configureStore({

    reducer: {
        userName: userNameSlice,
}
})