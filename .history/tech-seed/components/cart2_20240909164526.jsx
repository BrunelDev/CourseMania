"use client";
import { useEffect, useState } from "react";
import { useKKiaPay } from "kkiapay-react";

export default function Cart() {
  const [amount, setAmount] = useState();

  const { openKkiapayWidget, addSuccessListener } = useKKiaPay();

  useEffect(() => {
    addSuccessListener(({ transactionId }) => {
      console.log(transactionId, "transactionId");
    });
  }, [addSuccessListener]);

  const open = () => {
    try {
      openKkiapayWidget({
        amount: 20000,

        key: "94ae3f606eb811efa89fb507e973dd5c",
        sandbox: false,
      });
    } catch (error) {}
  };
  console.log(process.env.PUBLIC_KEY);
  return (
    <div className="w-[400px]">
      <div className="flex space-x-3">
        <div>
          <div className="flex justify-center items-center p-4">
            <CartItem />
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <button
          onClick={() => {
            open();
          }}
          className="w-full h-[50px] bg-[#22B286] text-white font-bold rounded-full"
        >
          Payer
        </button>
      </div>
    </div>
  );
}

export function CartItem() {
  return <div className="flex justify-between items-center p-4 border-b"></div>;
}
