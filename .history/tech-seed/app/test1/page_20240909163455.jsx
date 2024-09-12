import Cart from "@/components/cart2";
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

      key: process.env.PUBLIC_KEY,
      sandbox: true,
    });
  };

  return (
    <div>
      <Cart />
    </div>
  );
}
