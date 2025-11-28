// src/pages/Cart.js
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h3>Your Cart is Empty 🛒</h3>
        <p>Add some products to your cart to see them here.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      <h2 className="fw-bold mb-4">My Cart ({totalItems} items)</h2>
      
      <div className="row">
        <div className="col-lg-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="card mb-3 shadow-sm"
            >
              <div className="row g-0">
                <div className="col-md-4 p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid rounded"
                    style={{ height: "150px", objectFit: "contain" }}
                  />
                </div>

                <div className="col-md-8">
                  <div className="card-body d-flex flex-column h-100">
                    <h6 className="card-title">{item.title}</h6>
                    <p className="text-primary fw-bold">$ {item.price}</p>

                    <div className="mt-auto d-flex align-items-center justify-content-between">
                      <div className="input-group input-group-sm w-50">
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="form-control text-center"
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm p-3">
            <h5 className="fw-bold mb-3">Order Summary</h5>
            <p>Total Items: {totalItems}</p>
            <h4 className="text-primary fw-bold">$ {totalPrice}</h4>
            <button className="btn btn-success w-100 mt-3">
              Checkout
            </button>
            <button
              className="btn btn-outline-danger w-100 mt-2"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
