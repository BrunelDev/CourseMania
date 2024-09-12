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
    <div>
      <MDBCard className="mb-3">
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div>
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  fluid
                  className="rounded-3"
                  style={{ width: "65px" }}
                  alt="Shopping item"
                />
              </div>
              <div className="ms-3">
                <MDBTypography tag="h5">Iphone 11 pro</MDBTypography>
                <p className="small mb-0">256GB, Navy Blue</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div style={{ width: "50px" }}>
                <MDBTypography tag="h5" className="fw-normal mb-0">
                  2
                </MDBTypography>
              </div>
              <div style={{ width: "80px" }}>
                <MDBTypography tag="h5" className="mb-0">
                  $900
                </MDBTypography>
              </div>
              <a href="#!" style={{ color: "#cecece" }}>
                <MDBIcon fas icon="trash-alt" />
              </a>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
