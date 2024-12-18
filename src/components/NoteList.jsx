import React from "react";

class NoteList extends React.Component {
  render() {
    const { notes, deleteNote, archiveNote } = this.props;

    const activeNotes = notes.filter((note) => !note.archived);
    const archivedNotes = notes.filter((note) => note.archived);

    const formatDate = (date) =>
      new Intl.DateTimeFormat("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(date));

    return (
      <div className="bg-white shadow-md rounded-lg p-6 my-6">
        <h2 className="text-2xl font-bold mb-12 text-gray-800 text-center">
          Daftar Catatan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Active Notes */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Active Notes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeNotes.length > 0 ? (
                activeNotes.map((note) => (
                  <div
                    key={note.id}
                    className="bg-white border rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {note.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        {formatDate(note.createdAt)}
                      </p>
                      <p className="text-gray-700 mb-4">{note.body}</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => archiveNote(note.id)}
                        className="w-full py-2 text-sm rounded bg-yellow-500 text-white hover:bg-yellow-600"
                      >
                        Arsipkan
                      </button>
                      <button
                        onClick={() => deleteNote(note.id)}
                        className="w-full py-2 text-sm rounded bg-red-500 text-white hover:bg-red-600"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Tidak ada catatan.</p>
              )}
            </div>
          </div>

          {/* Archived Notes */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Archived Notes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {archivedNotes.length > 0 ? (
                archivedNotes.map((note) => (
                  <div
                    key={note.id}
                    className="bg-white border rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {note.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        {formatDate(note.createdAt)}
                      </p>
                      <p className="text-gray-700 mb-4">{note.body}</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => archiveNote(note.id)}
                        className="w-full py-2 text-sm rounded bg-green-500 text-white hover:bg-green-600"
                      >
                        Pindahkan
                      </button>
                      <button
                        onClick={() => deleteNote(note.id)}
                        className="w-full py-2 text-sm rounded bg-red-500 text-white hover:bg-red-600"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Tidak ada catatan.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteList;
