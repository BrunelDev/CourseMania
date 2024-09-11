"use client";
import Cart from "@/components/cart";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import { useKKiaPay } from "kkiapay-react";
export default function CartPage() {
  const { openKkiapayWidget, addSuccessListener } = useKKiaPay();

  useEffect(() => {
    addSuccessListener(({ transactionId }) => {
      console.log(transactionId, "transactionId");
    });
  }, [addSuccessListener]);

  const open = () => {
    openKkiapayWidget({
      amount: 1,

      key: process.env.PUBLIC_KEY,
      sandbox: true,
    });
  };
  return (
    <div>
      <div className="mb-24">
        <Navbar />
      </div>
      <div className="flex justify-center items-center mt-24">
        <Cart />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
