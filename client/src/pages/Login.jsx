import Header from "../components/Header/Header";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    //reset errors
    setError("");

    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:5000/api/login",
        headers: { "Content-Type": "application/json" },
        data: {
          email,
          password,
        },
      });
      const data = await res.data;
      // console.log(data);
      console.log(res);
      if (data.user) {
        console.log(data);
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
      setError(err);
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="container ">
        <div className="container mt-4 p-2">
          <div className="card" style={{ width: "17rem" }}>
            <h4 className="card-header h6 text-primary">Login</h4>
            <div className="card-body align-items-start">
              <form action="">
                <div className="card-title fw-semibold ">
                  Login to access your library
                </div>
                <div className="mt-2 mb-2">
                  <label htmlFor="" className="form-label text-start fs-6">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="text-danger">{error.email}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label fs-6">
                    Password
                  </label>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="text-danger">{error.password}</div>
                </div>
                <div className="row p-2">
                  <div className="col">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                  <div className="col">
                    <Link to={"/signup"}>
                      <button type="submit" className="col btn btn-primary">
                        Register
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
