import { Dashboard } from "pages/dashboard";
import { Records } from "pages/records";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Records" element={<Records/>} />
      </Routes>
    </BrowserRouter>
  )
}
