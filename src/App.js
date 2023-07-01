import { useSelector } from "react-redux";
import "./App.css";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import Signup from "./page/Signup/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "./page/Admin/Admin";
import AddProduct from "./page/Admin/Add/AddProduct";

function App() {
  const user=useSelector((state) => state.authReducer.user)
  console.log("user app",user);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
