import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import AdminLayout from "../pages/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Product from "../pages/product/Product";
import Search from "../pages/search/Search";
import Checkout from "../pages/checkout/Checkout";
import Categories from "../pages/admin/categories/Categories";
import CreateCategory from "../pages/admin/categories/CreateCategory";
import Users from "../pages/admin/users/Users";
import AdminOrders from "../pages/admin/orders/Orders";
import EditProducts from "../pages/admin/products/EditProducts";
import CreateProducts from "../pages/admin/products/CreateProduct";
import Products from "../pages/admin/products/Products";
import EditCategory from "../pages/admin/categories/EditCategory";
import Cart from "../pages/cart/Cart";
import LoginForm from "../pages/auth/Login";
import RegistrationForm from "../pages/auth/Register";
import PrivateRoute from "./PrivateRoute";
import UserLayout from "../pages/user/UserLayout";
import Orders from "../pages/user/Orders";
import Profile from "../pages/user/Profile";
import UserDashboard from "../pages/user/UserDashboard";
import PaymentHistory from "../pages/user/PaymentHistory";
import Reviews from "../pages/user/Reviews";
import Settings from "../pages/user/Settings";
import CancelOrders from "../pages/user/CancelOrders";
import CreateOrder from "../pages/admin/orders/CreateOrder";
import EditOrder from "../pages/admin/orders/EditOrder";
import EditUser from "../pages/admin/users/EditUser";
import CreateUser from "../pages/admin/users/CreateUser";
import OrderDetailsPage from "../pages/admin/orders/OrderDetailsPage";
import UserDetailsPage from "../pages/admin/users/UserDetailsPage";
import Payment from "../pages/admin/payments/Payment";
import PaymentDetailsPage from "../pages/admin/payments/PaymentDetailsPage";

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
          <Route index element={<UserDashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="profile" element={<Profile />} />
          <Route path="payment-history" element={<PaymentHistory />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="settings" element={<Settings />} />
          <Route path="cancel-orders" element={<CancelOrders />} />
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
        <Route path="orders/:orderId" element={<OrderDetailsPage />} />
        <Route path="orders/create" element={<CreateOrder />} />
        <Route path="orders/edit/:orderId" element={<EditOrder />} />

        {/* Payments Routes */}
        <Route path="payments" element={<Payment />} />
        <Route path="payments/:paymentId" element={<PaymentDetailsPage />} />

        {/* Users Routes */}
        <Route path="users" element={<Users />} />
        <Route path="users/create" element={<CreateUser />} />
        <Route path="users/edit/:userId" element={<EditUser />} />
        <Route path="users/:userId" element={<UserDetailsPage />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegistrationForm />} />
    </Route>
  )
);

export default router;
