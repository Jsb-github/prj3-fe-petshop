import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OrderPage from "./pages/OrderPage";
import NotFoundPage from "./pages/NotFoundPage";
import UseAuth from "./hooks/useAuth";
import EventPage from "./pages/EventPage";
import ReviewPage from "./pages/ReviewPage";
import NoticePage from "./pages/NoticePage";
import FaqPage from "./pages/FaqPage";
import Q_APage from "./pages/Q_APage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="product/:id" element={<DetailPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="order" element={<OrderPage />} />

      <Route path="event" element={<EventPage />} />
      <Route path="review" element={<ReviewPage />} />
      <Route path="notice" element={<NoticePage />} />
      <Route path="faq" element={<FaqPage />} />
      <Route path="qa" element={<Q_APage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

function App() {
  return (
    <UseAuth>
      <RouterProvider router={routes} />
    </UseAuth>
  );
}

export default App;
