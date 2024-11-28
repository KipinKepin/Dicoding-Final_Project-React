import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  handleTitleChange = (e) => {
    const maxChar = 50;
    if (e.target.value.length <= maxChar) {
      this.setState({ title: e.target.value });
    }
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = this.state;

    if (title.trim() && description.trim()) {
      this.props.addNote({
        id: uuidv4(),
        title,
        body: description,
        archived: false,
        createdAt: new Date().toISOString(),
      });
      this.setState({ title: "", description: "" });
    }
  };

  render() {
    const { title, description } = this.state;
    const maxChar = 50;

    return (
      <div
        className="w-full max-w-xl mx-auto p-6"
        style={{ marginTop: "75px" }}
      >
        <h1 className="text-3xl font-bold mb-4">Buat Catatan</h1>

        <div className="flex justify-end mb-2">
          <small style={{ color: "grey" }}>
            {maxChar - title.length <= 0
              ? "Anda mencapai batas!"
              : `Sisa karakter: ${maxChar - title.length}`}
          </small>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Masukkan judul"
              className="input input-bordered w-full text-lg py-3 px-4"
              value={title}
              onChange={this.handleTitleChange}
            />
          </div>

          <div className="mb-6">
            <textarea
              placeholder="Tulis deskripsi disini"
              className="textarea textarea-bordered w-full text-lg py-3 px-4"
              rows="6"
              value={description}
              onChange={this.handleDescriptionChange}
            ></textarea>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className={`btn btn-success w-full py-3 text-lg ${
                !(title.trim() && description.trim())
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={!(title.trim() && description.trim())}
            >
              Buat
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNote;
