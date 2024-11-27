import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getInitialData from "../utils/data.js";

const initialState = {
  notes: getInitialData(),
  searchInput: "",
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    archiveNote: (state, action) => {
      const note = state.notes.find((note) => note.id === action.payload);
      if (note) {
        note.archived = !note.archived;
      }
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    searchNote: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { addNote, archiveNote, deleteNote, searchNote } =
  notesSlice.actions;
export default notesSlice.reducer;
