import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem("isAuthenticated");

    return navigate(`/auth`);
  };

  return (
    <div style={{ float: "right", paddingBottom: "30px" }}>
      <button onClick={() => handlelogout()} className="Button">
        Log out
      </button>
    </div>
  );
};

export default Logout;
