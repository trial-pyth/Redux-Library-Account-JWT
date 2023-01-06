import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    const res = await axios.get("http://localhost:5000/api/logout");
    console.log(res.data);

    if (res.data.jwt === "deleted") {
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand container-fluid text-center bg-dark bg-gradient w-auto text-secondary-emphasis p-2">
      <h1 className="h4 text-light">My Library</h1>
      <div className="col flex flex-col justify-content-end">
        <Link to="/login">
          {window.location.href === "http://localhost:3000/home" && (
            <button
              type="button"
              className="btn btn-sm btn-danger col m-2"
              onClick={handleLogout}
            >
              Log Out
            </button>
          )}
        </Link>
        <Link to="/login">
          <button type="button" className="btn btn-sm btn-warning col m-2">
            Log In
          </button>
        </Link>
        <Link to="/signup">
          <button type="button" className="btn btn-sm btn-success col">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
