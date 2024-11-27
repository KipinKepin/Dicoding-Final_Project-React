import React from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";

const Notes = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-col items-center flex-1 bg-blue-100">
        <AddNote />
      </div>

      <div className="flex flex-col items-center justify-start flex-1 bg-white">
        <NoteList />
      </div>
    </div>
  );
};

export default Notes;
