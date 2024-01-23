import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Product from "./pages/Product";
import Search from "./pages/Search";
import Checkout from "./pages/Checkout";
import Categories from "./pages/admin/categories/Categories";
import CreateCategory from "./pages/admin/categories/CreateCategory";
import Users from "./pages/admin/users/Users";
import UserDetails from "./pages/admin/users/UserDetails";
import OrderDetails from "./pages/admin/orders/OrderDetails";
import AdminOrders from "./pages/admin/orders/Orders";
import EditProducts from "./pages/admin/products/EditProducts";
import CreateProducts from "./pages/admin/products/CreateProducts";
import Products from "./pages/admin/products/Products";
import EditCategory from "./pages/admin/categories/EditCategory";
import Cart from "./pages/Cart";
import LoginForm from "./pages/auth/Login";
import RegistrationForm from "./pages/auth/Register";
import PrivateRoute from "./PrivateRoute";
import UserLayout from "./pages/user/UserLayout";
import Orders from "./pages/user/Orders";
import PaymentMethods from "./pages/user/PaymentMethods";
import Address from "./pages/user/Address";
import Profile from "./pages/user/Profile";
import SupportTicket from "./pages/user/SupportTicket";
import WishList from "./pages/user/WishList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route
          path="checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />

        {/* user routes */}
        <Route
          path="/user"
          element={
            <PrivateRoute isAdminRoute={false}>
              <UserLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Orders />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="support-tickets" element={<SupportTicket />} />
          <Route path="profile" element={<Profile />} />
          <Route path="address" element={<Address />} />
          <Route path="payment-methods" element={<PaymentMethods />} />
        </Route>
      </Route>

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <PrivateRoute isAdminRoute={true}>
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />

        {/* Categories Routes */}
        <Route path="categories" element={<Categories />} />
        <Route path="categories/create" element={<CreateCategory />} />
        <Route path="categories/edit/:categoryId" element={<EditCategory />} />

        {/* Products Routes */}
        <Route path="products" element={<Products />} />
        <Route path="products/create" element={<CreateProducts />} />
        <Route path="products/edit/:productId" element={<EditProducts />} />

        {/* Orders Routes */}
        <Route path="orders" element={<AdminOrders />} />
        <Route path="orders/details/:orderId" element={<OrderDetails />} />

        {/* Users Routes */}
        <Route path="users" element={<Users />} />
        <Route path="users/details/:userId" element={<UserDetails />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegistrationForm />} />
    </Route>
  )
);

export default router;
