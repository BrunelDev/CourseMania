"use client";
import { useEffect } from "react";
import { useKKiaPay } from "kkiapay-react";

export default function Cart() {
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
