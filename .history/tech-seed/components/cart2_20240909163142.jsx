"use client";
import { useEffect } from "react";
import { useKKiaPay } from "kkiapay-react";

export default function Cart() {
  return (
    <div className="w-[400px] flex space-x-3">
      <div>
        <div className="flex justify-center items-center p-4">
          <CartItem />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export function CartItem() {
  return <div className="flex justify-between items-center p-4 border-b"></div>;
}
