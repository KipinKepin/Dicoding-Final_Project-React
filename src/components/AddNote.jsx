import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addNote } from "../features/notesSlice";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const maxChar = 50;

  const countChar = (e) => {
    if (e.target.value.length <= maxChar) {
      setTitle(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addNote({
        id: uuidv4(),
        title,
        body: description,
        archived: false,
        createdAt: new Date().toISOString(),
      })
    );
    setTitle("");
    setDescription("");
  };

  const validInput = title.trim().length > 0 && description.trim().length > 0;

  return (
    <div className="w-full max-w-xl mx-auto p-6" style={{ marginTop: "75px" }}>
      <h1 className="text-3xl font-bold mb-4">Buat Catatan</h1>

      <div className="flex justify-end mb-2">
        <small style={{ color: "grey" }}>
          {maxChar - title.length <= 0
            ? "Anda mencapai batas!"
            : `Sisa karakter: ${maxChar - title.length}`}
        </small>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
            type="text"
            id="title"
            placeholder="Masukkan judul"
            className="input input-bordered w-full text-lg py-3 px-4"
            value={title}
            onChange={countChar}
          />
        </div>

        <div className="mb-6">
          <textarea
            id="body"
            placeholder="Tulis deskripsi disini"
            className="textarea textarea-bordered w-full text-lg py-3 px-4"
            rows="6"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          {validInput ? (
            <button
              type="submit"
              className="btn btn-success w-full py-3 text-lg"
            >
              Buat
            </button>
          ) : (
            <button className="btn btn-success w-full py-3 text-lg" disabled>
              Isi Judul dan Deskripsi
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddNote;
