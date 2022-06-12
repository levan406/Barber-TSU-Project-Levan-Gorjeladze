import "./App.css";
import Main from "./Components/main";
import Users from "./Components/users";
import UserDetails from "./Components/userDetails";
import Order from "./Components/order";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const ProtectedRoute = ({ children }) => {
    if (!localStorage.getItem("isAuthenticated")) {
      return <Navigate to="/auth" replace />;
    }

    return children;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/auth" element={<Main />} />
          <Route exact path="/register" element={<Main />} />
          <Route
            exact
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/userDetails/:userId"
            element={
              <ProtectedRoute>
                <UserDetails />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/order/:userId"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
