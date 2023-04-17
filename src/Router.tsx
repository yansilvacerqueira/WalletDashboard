import { Dashboard } from "pages/dashboard";
import { Home } from "pages/home";
import { Login } from "pages/login";
import { Records } from "pages/records";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Records" element={<Records/>} />
      </Routes>
    </BrowserRouter>
  )
}
