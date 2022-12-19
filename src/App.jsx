import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/Login/Login";
import AuthLayout from "./pages/AuthLayout";
import AnonymousLayout from "./pages/AnonymousLayout";

function App() {
  const admin = () => {
    if (
      JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        ?.currentUser?.isAdmin
    ) {
      return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser.isAdmin;
    } else {
      return "";
    }
  };

  const isAdmin = admin();
  // const admin = true;
  return (
    <>
      {isAdmin && <Topbar />}
      <div className="container">
        {isAdmin && <Sidebar />}
        <Routes>
          <Route element={<AnonymousLayout admin={isAdmin} />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<AuthLayout admin={isAdmin} />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
