import React from "react";

export default function Cart() {
  return (
    <div className="w-[400px] flex justify-center items-center p-4">
      <div>
        <CartItem />
      </div>
      <div></div>
    </div>
  );
}

export function CartItem() {
  return <div className="flex justify-between items-center p-4 border-b"></div>;
}
