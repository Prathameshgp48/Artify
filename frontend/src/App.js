import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Singin from "./components/Signin";
import Profile from "./components/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePost from "./components/CreatePost";
import React, { useState } from "react";
import { LoginContext, LoginContextProvider } from "./context/loginContext";

function App() {
  const [userLogin, setUserLogin] = useState(false);
  
  return (
    <BrowserRouter>
      <div className="App">
        <LoginContextProvider value={{ setUserLogin }}>
          <Navbar login={userLogin} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Singin />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/createPost" element={<CreatePost />}></Route>
          </Routes>
          <ToastContainer />
        </LoginContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
