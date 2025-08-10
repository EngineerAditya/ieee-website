// src/components/Layout.jsx
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
