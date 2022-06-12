import { useState } from "react";
import TextInput from "./textinput";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    if (!phoneNumber || !password) {
      alert("Phone number / password mandatory");
      e.preventDefault();
      e.stopPropagation();
    } else {
      const stringifiedUsers = localStorage.getItem("users");
      const users = JSON.parse(stringifiedUsers);

      if (!users) {
        alert("User not found");
      }

      const found = users.find(
        (p) => p.phoneNumber === phoneNumber && p.password === password
      );

      if (found) {
        if (found.userType === "2") {
          alert("Incorrect user type");
        } else {
          localStorage.setItem("isAuthenticated", "true");
          navigate("/users");
        }
      } else {
        alert("User not found");
      }
    }
  };

  return (
    <div style={{ paddingTop: "30px" }}>
      <form onSubmit={onSubmit}>
        <div className="LoginForm">
          <div>
            <div className="InputContainer">
              <span className="PhoneNumberSpan">Phone Number: </span>
              <TextInput
                inputType="text"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                id="login.phoneNumber"
              />
            </div>

            <div className="InputContainer">
              <span className="PhoneNumberSpan">Password: </span>
              <TextInput
                inputType="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="login.password"
              />
            </div>
            <input
              type="submit"
              value="Log in"
              className=""
              style={{
                marginTop: "30px",
                textDecoration: "none",
                padding: "15px",
                borderRadius: "15px",
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
