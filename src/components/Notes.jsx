import React, { Component } from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import Navbar from "./Navbar";
import getInitialData from "../utils/data.js";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchInput: "",
    };
  }

  addNote = (newNote) => {
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
    }));
  };

  deleteNote = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  };

  archiveNote = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  };

  handleSearch = (searchInput) => {
    this.setState({ searchInput });
  };

  render() {
    const { notes, searchInput } = this.state;
    const filteredNotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        note.body.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar onSearch={this.handleSearch} />
        <div className="flex flex-col items-center flex-1 bg-blue-100">
          <AddNote addNote={this.addNote} />
        </div>
        <div className="flex flex-col items-center justify-start flex-1 bg-white">
          <NoteList
            notes={filteredNotes}
            deleteNote={this.deleteNote}
            archiveNote={this.archiveNote}
          />
        </div>
      </div>
    );
  }
}

export default Notes;
