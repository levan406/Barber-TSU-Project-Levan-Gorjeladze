import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./logout";

const Users = () => {
  const [users, setUsers] = useState();
  const navigate = useNavigate();

  const handleUserDetails = (userId) => {
    navigate(`/userDetails/${userId}`);
  };

  useEffect(() => {
    const stringifiedUsers = localStorage.getItem("users");
    const userConverted = JSON.parse(stringifiedUsers);
    const filtereddUsers = userConverted.filter((p) => p.userType === "2");

    setUsers(filtereddUsers);
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
          {users?.length === 0 ? (
            <tr>
              <td>users not found</td>
            </tr>
          ) : (
            <>
              <thead
                style={{
                  fontWeight: "bolder",
                  background: "gray",
                  color: "white",
                }}
              >
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Price</td>
                <td></td>
              </thead>
              {users?.map((item) => (
                <>
                  <tr>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.price}</td>
                    <td align="right">
                      <button
                        onClick={() => handleUserDetails(item.userId)}
                        style={{
                          border: 0,
                          textDecoration: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </>
          )}
        </table>
      </center>
    </div>
  );
};

export default Users;
