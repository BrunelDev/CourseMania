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
      key: "94ae3f606eb811efa89fb507e973dd5c",
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
