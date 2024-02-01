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
import ReviewForm from "./components/form/Review/Form";

import NoticeDetail from "./pages/NoticePage/DetailPage";
import NoticeEdit from "./pages/NoticePage/EditPage";
import NoticeRegistration from "./pages/NoticePage/Registration";
import EventDetail from "./pages/EventPage/DetailPage";
import EventEdit from "./pages/EventPage/EditPage";
import EventRegistration from "./pages/EventPage/Registration";
import ReviewRegistration from "./pages/ReviewPage/Registration";
import ReviewDetail from "./pages/ReviewPage/DetailPage";
import ReviewEdit from "./pages/ReviewPage/EditPage";

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
      <Route path="event/write" element={<EventRegistration />}/>
      <Route path="event/:no" element={<EventDetail />}/>
      <Route path="event/edit/:no" element={<EventEdit />}/>

      <Route path="review" element={<ReviewPage />} />
      <Route path="review/write/:no" element={<ReviewRegistration />}/>
      <Route path="review/:no" element={<ReviewDetail/>}/>
      <Route path="review/edit/:no" element={<ReviewEdit />}/>

      <Route path="notice" element={<NoticePage />} />
      <Route path="notice/write" element={<NoticeRegistration />}/>
      <Route path="notice/:no" element={<NoticeDetail/>}/>
      <Route path="notice/edit/:no" element={<NoticeEdit/>}/>


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
