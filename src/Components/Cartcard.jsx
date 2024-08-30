import  { useState, useContext } from "react";
import { UserContext } from "../App";

function Cartcard() {
  let { product, setProduct } = useContext(UserContext);
  return (
    <>
      <div className="container">
        {product.map((e, i) => {
          const discountPrice = Math.round(
            e.price * (e.discountPercentage / 100)
          );
          const [quantity, setQuantity] = useState(1);

          const addQuantity = () => {
            setQuantity(quantity + 1);
          };

          const removeQuantity = () => {
            setQuantity(quantity - 1);
          };

          return (
            <>
              <div
                key={i}
                className="card mb-5 border border-secondary"
                style={{ minWidth: "100%", maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src={e.image}
                      className="img-fluid rounded-start cardImage"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body px-3">
                      <div className="top">
                        <div className="top-header d-flex justify-content-between align-items-center">
                          <h5 className="card-title">{e.title}</h5>
                          <h4 className="card-title">${e.price}</h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="card-text">Brand : {e.brand}</p>
                          <p className="card-text text-success ">
                            Discount Offer : {e.discountPercentage}%
                          </p>
                        </div>
                        <p className="card-text">{e.description}</p>
                        <p className="card-text">Rating : {e.rating}/5</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                          <div className="d-flex flex-row justify-content-between align-items-center">
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                              style={{ marginRight: "8px" }}
                              onClick={() => {
                                removeQuantity();
                              }}
                            >
                              {" "}
                              -{" "}
                            </button>
                            <div className="py-1 quantityText">{quantity}</div>
                            <button
                              type="button"
                              className="btn btn-outline-success"
                              style={{ marginLeft: "8px" }}
                              onClick={() => {
                                addQuantity();
                              }}
                            >
                              {" "}
                              +{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="bottom">
                        <div className="d-flex justify-content-between align-items-center">
                          Original Price (1 item) :
                          <p className="card-text">${e.price} </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          Discount Amount :
                          <p className="card-text text-success">
                            {" "}
                            - ${discountPrice}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          Final Price (Price - Discount) :
                          <p className="card-text">
                            ${e.price - discountPrice}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          Total Amount (Final price * Quantity) :
                          <h5 className="card-text">${e.price * quantity}</h5>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary float-end my-3"
                      >
                        Proceed to pay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Cartcard;