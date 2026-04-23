import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Home from "./pages/Home";
import Admin_user_input from "./pages/Admin_user_input";
import Plans from "./pages/plans";
import { Suspense, useEffect, useState } from "react";
import { createContext } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
const Login = lazy(() => import("./pages/Login"));
const ThemeContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <div className="min-h-screen  text-gray-800">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/plans"
            element={
              <ProtectedRoute>
                <Plans />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
    // <div>
    //   <h1>count :{count}</h1>
    //   <button onClick={btnAction}>click</button>
    // </div>
  );
}

export default App;

