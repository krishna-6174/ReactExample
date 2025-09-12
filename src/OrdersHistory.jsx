import React from "react";
import { useSelector } from "react-redux";
import { BagCheck, Calendar } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function OrdersHistory() {
  const orders = useSelector((state) => state.orders);
  const navigate = useNavigate();
  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <BagCheck size={48} className="text-primary mb-2" />
        <h2 className="fw-bold text-dark">Your Orders</h2>
        <p className="text-muted">Track, view, and manage your past purchases.</p>
      </div>

      {/* Empty State */}
      {orders.length === 0 ? (
        <div className="text-center p-5 bg-light rounded-4 shadow-sm">
          <p className="mb-1 fs-5 text-muted">No orders found yet.</p>
          <button className="btn btn-primary mt-3"
          onClick={() => navigate("/")}>
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="row g-4">
          {orders.map((order, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card shadow-sm border-0 rounded-4 h-100 order-card">
                {/* Card Header */}
                <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 fw-bold text-primary">
                    Order #{index + 1}
                  </h5>
                  <small className="text-muted d-flex align-items-center">
                    <Calendar size={16} className="me-1" />
                    {new Date(order.date).toLocaleDateString()}
                  </small>
                </div>

                <div className="card-body">
                  {order.items.map((item) => (
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
                        <h6 className="mb-1 fw-semibold text-dark">
                          {item.name}
                        </h6>
                        <small className="text-muted d-block">
                          Qty: {item.quantity}
                        </small>
                        <small className="fw-bold text-success">
                          ${item.price.toFixed(2)}
                        </small>
                      </div>
                    </div>
                  ))}
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
                        Total: ${order.totalAmount.toFixed(2)}
                      </span>

                  </div>
                </div>

                {/* Footer (Optional Buttons) */}
                <div className="card-footer bg-white border-0 text-center">
                  <button className="btn btn-outline-primary btn-sm me-2">
                    View Details
                  </button>
                  <button className="btn btn-outline-secondary btn-sm">
                    Reorder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrdersHistory;
