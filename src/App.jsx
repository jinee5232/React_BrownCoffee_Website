import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage.jsx";
import Activity from "./pages/Activitypage.jsx";
import Layout from "./Layout.jsx";
import Member from "./pages/Member.jsx";
import Product from "./pages/productpage.jsx";
import Store from "./pages/Storepage.jsx";
import Shop from "./pages/Shoppingpage.jsx";
import ActivityInfo from "./pages/ActivityInfo.jsx";
import ActivityImage from "./pages/ActivityImage.jsx";
import Registerpage from "./pages/Registerpage.jsx";
import Loginpage from "./pages/Loginpage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="activity" element={<Activity />}></Route>
          <Route path="/activity/:active" element={<ActivityInfo />}></Route>
          <Route
            path="/activityPhoto/:active"
            element={<ActivityImage />}
          ></Route>
          <Route path="member" element={<Member />}></Route>
          <Route path="member/register" element={<Registerpage />}></Route>
          <Route path="member/login" element={<Loginpage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="store" element={<Store />}></Route>
          <Route path="shopping" element={<Shop />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
