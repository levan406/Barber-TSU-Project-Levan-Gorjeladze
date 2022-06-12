import { useEffect, useState } from "react";
import Login from "./login";
import Register from "./register";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";

const Main = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(1);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/auth") {
      setTabIndex(1);
    }

    if (location.pathname == "/register") {
      setTabIndex(2);
    }
  }, [location.pathname]);

  return (
    <div
      style={{ paddingLeft: "20%", paddingRight: "20%", paddingTop: "30px" }}
    >
      <div className="NavBar">
        <button
          onClick={() => navigate("/auth")}
          disabled={tabIndex === 1}
          style={{ marginRight: "15px" }}
          className="Button"
        >
          Log in
        </button>
        <button
          onClick={() => navigate("/register")}
          disabled={tabIndex === 2}
          className="Button"
        >
          Register
        </button>
      </div>

      {tabIndex === 1 && <Login setTabIndex={setTabIndex} />}
      {tabIndex === 2 && <Register setTabIndex={setTabIndex} />}
    </div>
  );
};

export default Main;
