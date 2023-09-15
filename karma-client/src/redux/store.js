import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/taskSlice"
import { userSlice } from "./features/Users/userSlice";
export  default configureStore({
    reducer:{
        taskSlice:taskSlice,
        userSlice:userSlice
    },
})