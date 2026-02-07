import {Routes, Route, Navigate} from "react-router-dom";

import React from 'react'

// import Login from "../features/auth/pages/Login";
// import Signup from "../features/auth/pages/Signup"
import Home from "../features/Home/pages/Home";
import Courses from "../features/courses/pages/Courses";
import HelpForm from "../features/help/pages/HelpForm";
import Cart from "../features/cart/pages/Cart";
import PageLayout from "../components/layout/PageLayout";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="help" element={<HelpForm />} />
        <Route path="cart" element={
          <ProtectedRoute>
          <Cart />
          </ProtectedRoute>} />
      </Route>
    </Routes>
  )
}

export default AppRoutes