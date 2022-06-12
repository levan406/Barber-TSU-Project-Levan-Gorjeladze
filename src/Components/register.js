import { useEffect, useState } from "react";
import Client from "./client";
import Barber from "./barber";
import NewPassword from "./newpassword";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const userInit = {
  userId: null,
  userType: 1,
  phoneNumber: null,
  firstName: null,
  lastName: null,
  email: null,
  price: 1,
  password: null,
  passwordRepeat: null,
  score: null,
  comment: null,
};

const Register = () => {
  const [userData, setUserData] = useState(userInit);
  const navigate = useNavigate();

  const validate = () => {
    let isValid = false;

    if (Number(userData.userType) === 1) {
      isValid =
        userData.phoneNumber && userData.password && userData.passwordRepeat;
    } else {
      isValid =
        userData.phoneNumber &&
        userData.password &&
        userData.passwordRepeat &&
        userData.firstName &&
        userData.lastName;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      alert("Fill all mandatory fields");
      e.preventDefault();
      e.stopPropagation();
    } else if (userData.password !== userData.passwordRepeat) {
      alert("Password mismatch");
      e.preventDefault();
      e.stopPropagation();
    } else if (userData.password.length > 8) {
      alert("Incorrect password max length");
      e.preventDefault();
      e.stopPropagation();
    } else {
      let stringifiedUsers = localStorage.getItem("users");
      let users = JSON.parse(stringifiedUsers);

      if (!users) users = [];

      userData.userId = uuidv4();
      users.push(userData);

      localStorage.setItem("users", JSON.stringify(users));

      alert("User added succefully");

      navigate("/auth");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tr>
          <td align="left" width="250px">
            Select user type
          </td>
          <td align="left">
            <select
              style={{ marginBottom: "15px" }}
              id="userType"
              value={userData.userType}
              onChange={(e) =>
                setUserData({ ...userData, userType: e.target.value })
              }
            >
              <option value="1">Client</option>
              <option value="2">Barber</option>
            </select>
          </td>
        </tr>

        <Client data={userData} setData={setUserData} />

        {userData.userType === "2" && (
          <Barber data={userData} setData={setUserData} />
        )}

        <tr>
          <td colSpan="2">
            <p style={{ marginTop: "15px" }}></p>
          </td>
        </tr>

        <NewPassword data={userData} setData={setUserData} />

        <tr>
          <td align="left" colSpan={2}>
            <input
              type="submit"
              value="Add user"
              style={{ margin: " 0 auto", marginTop: "30px" }}
              className="Button"
            />
          </td>
        </tr>
      </table>
    </form>
  );
};

export default Register;
