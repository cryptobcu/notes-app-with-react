import { createSlice, nanoid } from "@reduxjs/toolkit";

// LocalStorage
export const getLocalStorage = () => {
    const notes = localStorage.getItem("notes")
    return notes ? JSON.parse(notes) : []
}
export const setLocalStorage = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes))
}
// LocalStorage


export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notes:  [...getLocalStorage()],
        activeColor: (localStorage.getItem("activeColor") ? localStorage.getItem("activeColor") : "green.300"),
        filtered: "",
        currentNote: [],
        activeCategory: (localStorage.getItem("activeCategory") ? localStorage.getItem("activeCategory") : ""),
        cardSize: (localStorage.getItem("cardSize") ? localStorage.getItem("cardSize") : 250 )
        
    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                state.notes.unshift(action.payload)
                setLocalStorage(state.notes)
            },
            prepare: (  notes, activeColor ) => {
                return {
                    payload: {
                        id: nanoid(),
                        note: notes,
                        color: activeColor
                    }
                }
            }
        },
        changeColor: (state, action) => {
            state.activeColor = action.payload
            localStorage.setItem("activeColor", action.payload)
        },
        findNote:(state, action) => {
            state.filtered = action.payload
        },
        onClickNote: (state, action) => {
            state.currentNote = action.payload
        },
        edit: (state, action) => {
            state.notes.find( (item) => item.id === state.currentNote.id ? item.note = action.payload : "")
            setLocalStorage(state.notes)
        },
        deleteNote: (state) => {
            state.notes = state.notes.filter( (item) => item.id !== state.currentNote.id )
            setLocalStorage(state.notes)
        },
        category: (state, action) => {
            state.activeCategory = action.payload
            localStorage.setItem("activeCategory", action.payload)
        },
        changeCardSize: (state, action) => {
            state.cardSize = action.payload
            localStorage.setItem("cardSize", action.payload)
        }


    }
})

export const { addNote, changeColor, findNote, onClickNote, edit, deleteNote, category, changeCardSize } = notesSlice.actions
export default notesSlice.reducer
