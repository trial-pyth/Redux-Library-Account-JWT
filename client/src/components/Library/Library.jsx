import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../store/slices/bookSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteBookHandler = async (id) => {
    //dispatch delete book action
    const res = await axios.get("http://localhost:5000/api/verify", {
      withCredentials: true,
    });

    console.log(res.data);

    if (res.data.jwt === "verified") {
      dispatch(deleteBook({ id: id }));
    } else {
      navigate("/login");
    }
  };

  const books = useSelector((state) => state.books.books);

  const booksTable = books.map((book) => (
    <tr key={book.id}>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.rating}</td>
      <td>
        <button
          className="btn btn-danger delete"
          onClick={() => deleteBookHandler(book.id)}
        >
          x
        </button>
      </td>
    </tr>
  ));
  return (
    <div>
      <div className="container alert alert-subtle alert-secondary mt-4 w-50 text-center">
        <h4 className="text-primary fw-bold">Read</h4>
      </div>
      <div className="container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{booksTable}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Library;
