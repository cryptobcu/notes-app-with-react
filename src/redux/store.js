import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notes/notesSlice"

export const store = configureStore({
    reducer: {
        notes: notesReducer
    }
})