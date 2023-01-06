import { useState } from "react";
import Header from "../components/Header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();

    //reset errors
    setError("");

    console.log({ email, password });
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:5000/api/signup",
        headers: { "Content-Type": "application/json" },
        data: {
          email,
          password,
        },
      });
      const data = await res.data;
      console.log(data);

      if (data.user) {
        navigate("/");
      }
    } catch (err) {
      console.log(err.response.data.errors);
      setError(err.response.data.errors);
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="container ">
        <div className="container mt-4 p-2">
          <div className="card" style={{ width: "17rem" }}>
            <h4 className="card-header h6 text-primary">Register</h4>
            <div className="card-body align-items-start">
              <form action="">
                <div className="card-title fw-semibold ">
                  Create a New Account
                </div>
                <div className="mt-2 mb-2">
                  <label htmlFor="" className="form-label text-start fs-6">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="text-danger">{error.email}</div>
                  <div className="form-text">
                    Your email will never be shared
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label fs-6">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="pwd"
                    className="form-control"
                  />
                  <div className="text-danger">{error.password}</div>
                </div>
                <div className="row p-2">
                  <div className="col">
                    <button
                      type="submit"
                      className="col btn btn-primary"
                      onClick={handleSignup}
                    >
                      Register
                    </button>
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

export default Register;
