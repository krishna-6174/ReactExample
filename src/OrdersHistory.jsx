import React, { useState, useEffect, useCallback } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Calendar } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import Swal from "sweetalert2";
import { addToCart, clearCart } from "./store";

function OrdersHistory() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const orders = useSelector((state) => state.orders);
  const navigate = useNavigate();

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [reorderDecision, setReorderDecision] = useState(null); // true = reorder, false = cancel

  const handleReOrder = useCallback(
    (order) => {
      if (!order) return;

      if (cart.length > 0) {
        Swal.fire({
          title: "Reorder Options",
          text: "Your cart already has items. Do you want to add these order items or replace your cart?",
          icon: "question",
          showCancelButton: true,
          showDenyButton: true,
          confirmButtonText: "Add to Cart",
          denyButtonText: "Replace Cart",
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            order.items.forEach((item) => dispatch(addToCart(item)));
            Swal.fire("Added!", "Order items were added to your cart.", "success");
          } else if (result.isDenied) {
            dispatch(clearCart());
            order.items.forEach((item) => dispatch(addToCart(item)));
            Swal.fire("Replaced!", "Your cart was replaced with this order.", "success");
          }
          navigate("/cart");
        });
      } else {
        order.items.forEach((item) => dispatch(addToCart(item)));
        Swal.fire("Place Order!", "All items were added to your cart.", "success");
        navigate("/cart");
      }
    },
    [cart, dispatch]
  );

  useEffect(() => {
    const modalEl = document.getElementById("orderDetailsModal");
    if (!modalEl) return;

    const handleHidden = () => {
      if (reorderDecision === true) {
        handleReOrder(selectedOrder);
      }
      // if false, do nothing (just closed)
      setReorderDecision(null);
    };

    modalEl.addEventListener("hidden.bs.modal", handleHidden);

    return () => {
      modalEl.removeEventListener("hidden.bs.modal", handleHidden);
    };
  }, [reorderDecision, handleReOrder, selectedOrder]);

  if (orders.length === 0) {
    return (
      <div className="container my-5 d-flex justify-content-center">
        <div
          className="d-flex flex-column align-items-center justify-content-center bg-white shadow-lg rounded-5 p-4 p-md-5 text-center"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <img
            src="/empty-orders.png"
            alt="Empty Orders"
            className="mb-4 img-fluid"
            style={{ maxWidth: "250px" }}
          />
          <h4 className="text-primary mb-2">Nothing’s cooking here… yet 🍳</h4>
          <p className="text-muted mb-4 small">
            Waiting patiently… but a little package would be nice 📦
          </p>
          <button
            className="btn btn-outline-primary rounded-pill px-4 py-2"
            onClick={() => navigate("/")}
          >
            Place an Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container my-4">
        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
          <div className="d-flex align-items-center justify-content-center text-primary me-3">
            <ShoppingBag size={70} />
          </div>
          <div className="text-center">
            <h2 className="mb-0 fw-bold text-dark">My Orders</h2>
            <small className="text-muted">
              Track your purchases and view order details
            </small>
          </div>
        </div>

        <div className="row g-4">
          {orders.map((order) => (
            <div key={order.orderId} className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-lg border-0 p-2 bg-white rounded-4 h-100 order-card">
                <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 fw-bold text-primary">
                    Order #{order.orderId}
                  </h5>
                  <small className="text-muted d-flex align-items-center">
                    <Calendar size={16} className="me-1" />
                    {order.date}
                  </small>
                </div>

                <div className="card-body">
                  {order.items.slice(0, 2).map((item) => (
                    <div
                      key={item.id}
                      className="d-flex align-items-center mb-3 p-2 rounded bg-light"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded me-3"
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "cover",
                          border: "1px solid #e0e0e0",
                        }}
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-1 fw-semibold text-dark">{item.name}</h6>
                        <small className="text-muted d-block">
                          Qty: {item.quantity}
                        </small>
                        <small className="fw-bold text-success">
                          ₹{item.price.toFixed(2)}
                        </small>
                      </div>
                    </div>
                  ))}
                  {order.items.length > 2 && (
                    <p className="small text-muted">
                      + {order.items.length - 2} more items
                    </p>
                  )}
                  <hr />
                  <div className="text-end">
                    <span
                      className="badge text-white px-3 py-2 fs-6"
                      style={{
                        background: "linear-gradient(135deg, #4f46e5, #3b82f6)",
                        borderRadius: "12px",
                        boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
                      }}
                    >
                      Total: ₹{order.finalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="card-footer bg-white border-0 text-center">
                  <button
                    className="btn btn-success w-50 btn-sm me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#orderDetailsModal"
                    onClick={() => setSelectedOrder(order)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="orderDetailsModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content rounded-4 shadow-lg border-0">
              <div className="modal-header bg-primary text-white rounded-top-4">
                <h5 className="modal-title fw-bold">
                  Order Details - #{selectedOrder?.orderId}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setReorderDecision(false)}
                ></button>
              </div>
              

              <div className="modal-body p-4">

                {/* Body */} {/* Order Info */} 
                
                <div className="mb-3"> 
                  <p className="mb-1"> 
                    <strong>Date:</strong> {selectedOrder?.date} </p> 
                    <p className="mb-1"> <strong>Coupon:</strong>{" "} {selectedOrder?.appliedCoupon || "No coupon applied"} </p>
                     </div>
                {/* Items Table */}
               {/* Items Table */}
                <div className="table-responsive">
                   <table className="table table-striped align-middle"> 
                    <thead className="table-primary"> 
                      <tr> 
                        <th>Item</th> 
                        <th>Qty</th> 
                        <th>Price</th> 
                        <th>Subtotal</th> 
                        </tr> 
                        </thead> 
                        <tbody> 
                          {selectedOrder?.items?.map((item) => (
                             <tr key={item.id}> 
                             <td> 
                              <div className="d-flex align-items-center"> 
                                <img src={item.image} alt={item.name} className="rounded me-2" style={{ width: "50px", height: "50px", objectFit: "cover", border: "1px solid #e0e0e0", }} /> 
                                <span>{item.name}</span> 
                                </div> 
                                </td>
                                 <td>{item.quantity}</td> 
                                 <td>₹{item.price.toFixed(2)}</td> 
                                 <td>₹{(item.price * item.quantity).toFixed(2)}</td> 
                                 </tr>
                                 ))} 
                                 </tbody> 
                                 </table> 
                                 </div>

                <div className="mt-4"> 
                  <table className="table border-0 w-50 ms-auto"> 
                    <tbody> 
                      <tr>
                         <td className="text-end fw-semibold">Subtotal:</td> 
                         <td className="text-end"> ₹{selectedOrder?.totalAmount.toFixed(2)} </td> 
                         </tr> 
                         <tr>
                           <td className="text-end fw-semibold">Coupon Discount({selectedOrder?.couponCodeResult.discountPercentage}%):</td> 
                           <td className="text-end"> - ₹{selectedOrder?.couponCodeResult.discountAmount.toFixed(2)} </td>
                            </tr> 
                            <tr> 
                              <td className="text-end fw-semibold">Tax:</td> 
                              <td className="text-end"> ₹{selectedOrder?.tax.toFixed(2)} </td>
                               </tr> <tr> <td className="text-end fw-semibold">Shipping:</td> 
                               <td className="text-end"> ₹{selectedOrder?.shippingCost.toFixed(2)} </td> 
                </tr> 
                <tr className="table-success"> 
                  <td className="text-end fw-bold">Final Price:</td> 
                  <td className="text-end fw-bold text-success"> ₹{selectedOrder?.finalPrice.toFixed(2)} </td>
                   </tr> 
                   </tbody> 
                   </table> 
                   </div>

              </div>

              <div className="modal-footer bg-light rounded-bottom-4">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setReorderDecision(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => setReorderDecision(true)}
                >
                  Reorder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrdersHistory;
