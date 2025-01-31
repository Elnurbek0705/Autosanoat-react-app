import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { useData } from "../contexts/DataContext"; // Context'dan user ma'lumotlarini olish

const AppRoutes = () => {
  const { user } = useData(); // User ma'lumotlarini olish

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
        <Route path="/admin/*" element={user?.role === "admin" ? <AdminRoutes /> : <Navigate to="/" />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
