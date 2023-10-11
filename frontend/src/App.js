import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Userlist from "./components/UserList";
import Edituser from "./components/EditUser";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <Header></Header>

      <div style={{ textAlign: "center" }} className="container">
        <Routes>
          <Route path="/" element={<AddUser />} />
          <Route path="/userlist" element= { <Userlist/> } />
      <Route path="/edituser/:id" element= { <Edituser/> } />
      <Route path="/addproduct" element= { <AddProduct/> } />
      <Route path="/productlist" element= { <ProductList/> } />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
