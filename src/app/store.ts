import {configureStore} from "@reduxjs/toolkit";

import taskreducer from "./taskSlice";

export const store =  configureStore({
    reducer : taskreducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch