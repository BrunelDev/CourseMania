"use client";
import { useEffect, useState } from "react";
import { useKKiaPay } from "kkiapay-react";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const [amount, setAmount] = useState();

  const { openKkiapayWidget, addKkiapayListener } = useKKiaPay();

  function successHandler(response) {
    console.log(response);
  }

  function failureHandler(error) {
    console.log(error);
  }

  useEffect(() => {
    addKkiapayListener("success", successHandler);
    addKkiapayListener("failed", failureHandler);
  }, [addKkiapayListener]);

  const open = () => {
    try {
      openKkiapayWidget({
        amount: 20000,

        key: "94ae3f606eb811efa89fb507e973dd5c",
        sandbox: true,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

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

export function CartItem({ title, description, quantity, total }) {
  return (
    <div className="w-full flex justify-between items-center p-4 border-b">
      <img src="" alt="" />
      <div className="flex flex-col">
        <span>{title}</span>
        <span>{description}</span>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <span>{total}FCFA</span>
      <Trash2 />
    </div>
  );
}
