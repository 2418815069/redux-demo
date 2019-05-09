import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cart from "../../reducer/cart";
import AdminSelect from "../test/AdminSelect";
let store = createStore(cart);
const Layout = () => {
  return (
    <Provider store={store}>
      <div>
        <AdminSelect />
      </div>
    </Provider>
  );
};
export default Layout;
