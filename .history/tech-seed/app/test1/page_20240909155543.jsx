"use client";
import { useEffect } from "react";
import { useKKiaPay } from "kkiapay-react";

export default function Home() {
  const { openKkiapayWidget, addSuccessListener } = useKKiaPay();

  useEffect(() => {
    addSuccessListener(({ transactionId }) => {
      console.log(transactionId, "transactionId");
    });
  }, [addSuccessListener]);

  const open = () => {
    openKkiapayWidget({
      amount: 1,
      key: "9cef7621d09881104e7c80ae215b9f6f3f643a98",
      sandbox: true,
    });
  };

  return (
    <button
      onClick={() => {
        open();
      }}
    >
      Pay me
    </button>
  );
}
