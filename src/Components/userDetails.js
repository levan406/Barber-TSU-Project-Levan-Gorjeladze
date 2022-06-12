import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logout from "./logout";

const UserDetails = () => {
  const [user, setUser] = useState();
  const { userId } = useParams();
  let navigate = useNavigate();

  const handleOrder = () => {
    navigate(`/order/${user.userId}`);
  };

  useEffect(() => {
    const stringifiedUsers = localStorage.getItem("users");
    const userConverted = JSON.parse(stringifiedUsers);
    const currentUser = userConverted.find((p) => p.userId === userId);

    setUser(currentUser);
  }, []);

  return (
    <div
      style={{
        paddingLeft: "20%",
        paddingRight: "20%",
        paddingTop: "30px",
      }}
    >
      <center>
        <Logout />
        <table width="100%">
          <tr>
            <td style={{ fontSize: "28px", fontWeight: "bolder" }}>
              {user?.firstName} {user?.lastName}
            </td>
          </tr>
          <tr>
            <td>Price: {user?.price}</td>
          </tr>
          <tr>
            <td>Score: {user?.score}</td>
          </tr>
          <tr>
            <td>Comment: {user?.comment}</td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => handleOrder()}
                style={{ margin: "0 auto", marginTop: "30px" }}
                className="Button"
              >
                Order
              </button>
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
};

export default UserDetails;
