"use client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useEffect } from "react";
import { useKKiaPay } from "kkiapay-react";

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
    <section className="h-100 h-custom w-fit">
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <a href="#!" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                        shopping
                      </a>
                    </MDBTypography>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Panier</p>
                        <p className="mb-0">
                          Vous avez {} articles dans votre panier
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">Trier par:</span>
                          <a href="#!" className="text-body">
                            prix
                            <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <CartItem
                      title={"Comment programmer"}
                      description={"Introduction a la programmation"}
                      quantity={1}
                      total={30000}
                      image={localStorage.getItem("profileImage")}
                    />
                  </MDBCol>

                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Détails du panier
                          </MDBTypography>
                          <MDBCardImage
                            src={localStorage.getItem("profileImage")}
                            fluid
                            className="rounded-3"
                            style={{ width: "45px" }}
                            alt="Avatar"
                          />
                        </div>

                        <p className="small">Card type</p>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-visa fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-amex fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                        </a>

                        <form className="mt-4">
                          <MDBInput
                            className="mb-4"
                            label="Cardholder's Name"
                            type="text"
                            size="lg"
                            placeholder="Cardholder's Name"
                            contrast
                          />

                          <MDBInput
                            className="mb-4"
                            label="Card Number"
                            type="text"
                            size="lg"
                            minLength="19"
                            maxLength="19"
                            placeholder="1234 5678 9012 3457"
                            contrast
                          />

                          <MDBRow className="mb-4">
                            <MDBCol md="6">
                              <MDBInput
                                className="mb-4"
                                label="Expiration"
                                type="text"
                                size="lg"
                                minLength="7"
                                maxLength="7"
                                placeholder="MM/YYYY"
                                contrast
                              />
                            </MDBCol>
                            <MDBCol md="6">
                              <MDBInput
                                className="mb-4"
                                label="Cvv"
                                type="text"
                                size="lg"
                                minLength="3"
                                maxLength="3"
                                placeholder="&#9679;&#9679;&#9679;"
                                contrast
                              />
                            </MDBCol>
                          </MDBRow>
                        </form>

                        <hr />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">$4798.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">$4818.00</p>
                        </div>

                        <MDBBtn
                          color="info"
                          block
                          size="lg"
                          onClick={() => {
                            open();
                          }}
                        >
                          <div className="d-flex justify-content-between">
                            <span>4800FCFA</span>
                            <span>
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export function CartItem({ title, description, quantity, total, image }) {
  return (
    <div>
      <MDBCard className="mb-3">
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div>
                <MDBCardImage
                  src={image}
                  fluid
                  className="rounded-3"
                  style={{ width: "65px" }}
                  alt="Shopping item"
                />
              </div>
              <div className="ms-3">
                <MDBTypography tag="h5">{title}</MDBTypography>
                <p className="small mb-0">{description}</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div style={{ width: "50px" }}>
                <MDBTypography tag="h5" className="fw-normal mb-0">
                  {quantity}
                </MDBTypography>
              </div>
              <div style={{ width: "80px" }}>
                <MDBTypography tag="h5" className="mb-0">
                  {total}FCFA
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
