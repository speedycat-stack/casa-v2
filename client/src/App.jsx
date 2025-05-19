import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import BackButton from "./components/BackButton/BackButton";
import { CartProvider } from "./contexts/CartContext";

// Lazy-loaded feature components
const Home = lazy(() => import("./features/home/pages/Home"));
const Products = lazy(() => import("./features/products/pages/ProductsPage"));
const Contact = lazy(() => import("./Pages/ContactP"));
const Auth = lazy(() => import("./features/auth/pages/AuthPage"));
const Profile = lazy(() => import("./Pages/ProfileP"));
const Map = lazy(() => import("./Pages/MapP"));
const Donation = lazy(() => import("./features/donation/pages/DonationPage"));
const Volunteer = lazy(() => import("./Pages/VolunteerP"));
const ConfirmVolunteerAction = lazy(() => import("./Pages/ConfirmVolunteerAction"));
const DetailProduct = lazy(() =>
  import("./components/Products/DetailProduct/DetailProduct")
);
const CartPage = lazy(() => import("./Pages/CartPage"));
const CheckoutPage = lazy(() => import("./Pages/CheckoutPage"));
const PaymentPage = lazy(() => import("./Pages/PaymentPage"));

// Layouts
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const ProfileLayout = lazy(() => import("./layouts/ProfileLayout"));
const DonationLayout = lazy(() => import("./layouts/DonationLayout"));

const Orders = lazy(() => import("./components/Orders/Orders"));
const Traceability = lazy(() =>
  import("./components/Traceability/Traceability")
);
const Account = lazy(() => import("./components/Account/Account"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const Box = lazy(() => import("./components/Box/Box"));
const Checkout = lazy(() => import("./components/Checkout/Checkout"));
const Payment = lazy(() => import("./components/Payment/Payment"));

function App() {
  const location = useLocation();

  // Track navigation between pages
  useEffect(() => {
    // If we're on product page, set a flag in localStorage
    if (location.pathname === "/product" || location.pathname === "/products") {
      localStorage.setItem("wasOnProductPage", "true");
    }
    // If we're on home page and coming from product page, refresh the page
    else if (
      location.pathname === "/" &&
      localStorage.getItem("wasOnProductPage") === "true"
    ) {
      localStorage.removeItem("wasOnProductPage");
      window.location.reload();
    }
  }, [location.pathname]);

  return (
    <CartProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<DetailProduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/map" element={<Map />} />
            <Route path="/auth/*" element={<Auth />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/confirm-volunteer-action" element={<ConfirmVolunteerAction />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Route>

          {/* Profile routes */}
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route
              path="dashboard"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route
              path="orders"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Orders />
                </Suspense>
              }
            />
            <Route
              path="traceability"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Traceability />
                </Suspense>
              }
            />
            <Route
              path="account"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Account />
                </Suspense>
              }
            />
          </Route>

          {/* Donation routes */}
          <Route path="/donation" element={<DonationLayout />}>
            <Route index element={<Box />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </Suspense>
    </CartProvider>
  );
}

export default App;
