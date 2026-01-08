import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Store/CounterSlice'

const store = configureStore({
    reducer:{counter:counterReducer}
})

export default store;