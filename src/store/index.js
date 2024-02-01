import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categories.slice";
import userSlice from "./user/user.slice";
import productsSlice from "./products/products.slice";
import productSlice from "./products/product.slice";
import cartSlice from "./cart/cart.slice";
import orderSlice from "./order/order.slice";
import noticesSlice from "./notice/notices.slice";
import noticeSlice from "./notice/notice.slice";
import eventsSlice from "./event/events.slice";
import eventSlice from "./event/event.slice";
import reviewsSlice from "./review/reviews.slice";

export const store = configureStore({
  reducer: {
    userSlice,
    categoriesSlice,
    productsSlice,
    productSlice,
    cartSlice,
    orderSlice,
    eventSlice,
    eventsSlice,
    noticesSlice,
    noticeSlice,
    reviewsSlice,

  },
});
