import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/slices/bookSlice";
import { nanoid } from "nanoid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addBookHandler = async (e) => {
    e.preventDefault();
    const res = await axios.get("http://localhost:5000/api/verify", {
      withCredentials: true,
    });

    console.log(res.data);

    if (res.data.jwt === "verified") {
      dispatch(
        addBook({
          title,
          author,
          rating,
          id: nanoid(),
        })
      );
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="container-sm">
      <form action="">
        <div className="input-group justify-content-start mx-1 mt-3 mb-4">
          <span className="input-group-text">Title</span>
          <input
            type="text"
            name="title"
            className="form-control"
            value={title}
            placeholder="Huckleberry Finn "
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>
        <div className="input-group justify-content-start mx-1 mb-4">
          <span className="input-group-text">Author</span>
          <input
            type="text"
            name="author"
            className="form-control"
            value={author}
            placeholder="Mark Twain"
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="input-group justify-content-start mx-1 mb-4">
          <span className="input-group-text">Rating</span>
          <input
            type="number"
            className="form-control"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="10"
            required
          />
          <span className="input-group-text">#</span>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-gradient"
          onClick={addBookHandler}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
