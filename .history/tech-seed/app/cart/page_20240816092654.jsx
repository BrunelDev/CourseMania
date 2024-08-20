"use client";
import { Cart } from "@/components/cart";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
export default function CartPage() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="flex justify-center items-center mt-24">
        <Cart />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
