import {configureStore} from '@reduxjs/toolkit'
import { curdApi } from '../service/crud'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
    reducer:{
        [curdApi.reducerPath]:curdApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(curdApi.middleware),

})
setupListeners(store.dispatch);