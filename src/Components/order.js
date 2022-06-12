import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logout from "./logout";

const Order = () => {
  const [score, setScore] = useState(1);
  const [comment, setComment] = useState();
  const [user, setUser] = useState();
  const { userId } = useParams();

  let navigate = useNavigate();

  const extractUserInfo = () => {
    const stringifiedUsers = localStorage.getItem("users");
    const userList = JSON.parse(stringifiedUsers);
    const currentUser = userList.find((p) => p.userId === userId);

    return { currentUser, userList };
  };

  const handleSaveFeedback = () => {
    const userInfo = extractUserInfo();
    userInfo.currentUser.score = score;
    userInfo.currentUser.comment = comment;

    localStorage.setItem("users", JSON.stringify(userInfo.userList));

    navigate(`/users`);
  };

  const handleGoBack = () => {
    navigate(`/userDetails/${user.userId}`);
  };

  useEffect(() => {
    const currentUser = extractUserInfo().currentUser;

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
        <form onSubmit={handleSaveFeedback}>
          <table width="100%">
            <tr>
              <button
                onClick={() => handleGoBack()}
                style={{ margin: "30px auto" }}
                className="Button"
              >
                Go back
              </button>
            </tr>
            <tr>
              <td>
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
              <td>Give your review:</td>
            </tr>
            <tr>
              <td>
                <input
                  type="number"
                  max="10"
                  min="1"
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  name="comment"
                  rows="10"
                  cols="50"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="submit"
                  value="Save feedback"
                  style={{ margin: "30px auto" }}
                  className="Button"
                />
              </td>
            </tr>
          </table>
        </form>
      </center>
    </div>
  );
};

export default Order;
