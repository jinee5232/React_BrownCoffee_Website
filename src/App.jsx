import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import Activity from "./pages/Activitypage";
import Layout from "./Layout";
import Member from "./pages/Member";
import Product from "./pages/productpage";
import Store from "./pages/Storepage";
import Shop from "./pages/Shoppingpage";
import ActivityInfo from "./pages/ActivityInfo";
import ActivityImage from "./pages/ActivityImage";
import Registerpage from "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";

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
