import Header from "../components/Header/Header";
import AddBook from "../components/AddBook/AddBook";
import Library from "../components/Library/Library";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (document.cookie.indexOf("jwt") === -1) {
      console.log("invalid access");
      navigate("/login");
    }
  });

  return (
    <div>
      <Header />
      <AddBook />
      <Library />
    </div>
  );
};

export default Home;
