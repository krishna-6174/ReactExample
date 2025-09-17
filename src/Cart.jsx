import React, {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { QRCodeCanvas } from "qrcode.react";
import confetti from "canvas-confetti";
import "./Cart.css";

import { incrementQuantity, decrementQuantity, removeFromCart,clearCart, addOrder } from "./store";
import { calculateButtonDiscount, calculateTotal, getCouponDiscount } from "./discountUtils";


function Cart() {

  const [couponCodeResult, setCouponCodeResult] = useState({ isValid: false, discountPercentage: 0, discountAmount: 0 });
  const [cuponCode, setCuponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [buttonDiscount, setButtonDiscount] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [showQR, setShowQR] = useState(false);

  const users = useSelector((state) => state.users);
 


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return (
      <div className="container my-4 text-center">
        <h2>🛒 Cart is empty</h2>
      </div>
    );
  }



 
  let totalAmount = calculateTotal(cartItems);
  let discountAmount = calculateButtonDiscount(totalAmount, buttonDiscount);
  let shippingCost = totalAmount < 200 ? 50 : 0;
  let tax = totalAmount * 0.05;
  let finalPrice = totalAmount - discountAmount - couponCodeResult.discountAmount + shippingCost + tax;

  const handleApplyCoupon = () => {
    const result = getCouponDiscount(cuponCode, totalAmount);
    setCouponCodeResult(result);
    if (result.isValid) {
      setAppliedCoupon(cuponCode);
      setErrorMsg("");
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    } else {
      setAppliedCoupon("");
      setErrorMsg("❌ Invalid coupon code. Please try again.");
    }
  };


  const handleQr = () => {
    if (!users.isAuthenticated) {
      // ✅ If no email, navigate to register and pass redirect info
      navigate("/login", { state: { from: "/cart" } });
    } else {
      setShowQR(true);
    }
  };


  const proceedOrder = async () => {
    
    const order = {
      // ✅ generate unique order ID
            orderId: new Date().getTime(),
            amount: finalPrice,
            date: new Date().toLocaleString(),
            items: [...cartItems],
            totalAmount: finalPrice,
            appliedCoupon
    };
    dispatch(addOrder(order));
    dispatch(clearCart());

    emailjs.send("service_tt6a4lh", "template_2bx0xfd", {
      email: users.currentUser.email,
      order_id: Date.now(),
      orders: order.items.map((item) => ({
         name: item.name, price: item.price, units: item.quantity, image: `${window.location.origin}${item.image}`, })),
      cost: { shipping: shippingCost, tax, total: finalPrice.toFixed(2) }
    },"jx15nHhtYjQ9jlPfB").then(() => {
      toast.success("Order Confirmation mail sent successfully!");
    }, () => {
      toast.error("Failed to send confirmation mail.");
    });

    navigate("/order-success", { state: { orderId: order.orderId, amount: order.amount } });
  };

  const upiLink = `upi://pay?pa=7794093852@ybl&pn=My%20Awesome%20Store&am=${finalPrice.toFixed(2)}&cu=INR`;





  return (
    <>
    <div className="container my-4">
      <div className="row">

        {/*left side - cart items*/}
         <div className="col-12 col-lg-7 mb-4">
          <div className="card shadow-lg p-3">
            <h2 className="text-center mb-4">🛒 Your Cart</h2>

            <ul className="list-group list-group-flush mb-4">
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item py-3">
                  <div className="row align-items-center">
                    <div className="col-md-6 d-flex align-items-center">
                      <img src={item.image} alt={item.title} className="itemimage rounded me-3" />
                      <div className="item-details">
                        <h6 className="mb-2 text-success ">{item.title}</h6>
                        
                        <p className="mb-0">
                          ₹{item.price} x {item.quantity} ={" "}
                          <span className="fw-bold ">
                            ₹{item.price * item.quantity}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 text-sm-end mt-3 mt-md-0">
                     <div className="d-flex justify-content-around"> <button
                        onClick={() => dispatch(incrementQuantity(item))}
                        className="btn btn-sm btn-outline-primary me-2"
                      >
                        +
                      </button>
                      <button
                        onClick={() => dispatch(removeFromCart(item))}
                        className="btn btn-sm btn-outline-danger"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => dispatch(decrementQuantity(item))}
                        className="btn btn-sm btn-outline-secondary me-2"
                      >
                        -
                      </button>
                      
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>
      

{/* right side - price details */}
     <div className="col-12 col-lg-5">
        
        {/* ORDER SUMMARY */}
        <div className="card shadow-lg p-3 mb-3">
        <h5>💳 Order Summary</h5>
        <table className="table table-borderless">
          <tbody>
            <tr><td>Total Amount</td><td className="text-end">₹{totalAmount.toFixed(2)}</td></tr>
            {buttonDiscount !== 0 && <tr className="text-success"><td>Manual Discount</td><td className="text-end">- ₹{discountAmount.toFixed(2)}</td></tr>}
            {couponCodeResult.isValid && <tr className="text-success"><td>Coupon "{appliedCoupon}" ({couponCodeResult.discountPercentage}%)</td><td className="text-end">- ₹{couponCodeResult.discountAmount.toFixed(2)}</td></tr>}
            <tr><td>Shipping</td><td className="text-end">₹{shippingCost.toFixed(2)}</td></tr>
            <tr><td>Tax (5%)</td><td className="text-end">₹{tax.toFixed(2)}</td></tr>
            <tr className="fw-bold border-top"><td>Final Price</td><td className="text-end text-primary fs-4">₹{finalPrice.toFixed(2)}</td></tr>
          </tbody>
        </table>

        {/* Button Discounts */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          <button className="btn btn-outline-primary btn-sm" onClick={() => setButtonDiscount(10)}>10% Off</button>
          <button className="btn btn-outline-primary btn-sm" onClick={() => setButtonDiscount(20)}>20% Off</button>
          <button className="btn btn-outline-primary btn-sm" onClick={() => setButtonDiscount(30)}>30% Off</button>
          <button className="btn btn-outline-dark btn-sm" onClick={() => setButtonDiscount(0)}>Remove Discount</button>
        </div>

        {/* Coupon Input */}
        <div className="d-flex mb-3">
          <input type="text" value={cuponCode} onChange={(e) => setCuponCode(e.target.value.toUpperCase())} placeholder="Enter coupon code" className={`form-control me-2 ${errorMsg ? "is-invalid" : ""}`} />
          <button onClick={handleApplyCoupon} className="btn btn-success">Apply</button>
        </div>
        {errorMsg && <div className="invalid-feedback d-block">{errorMsg}</div>}
      </div>
      
      {/* Payment Options */}
      <div className="card shadow-lg p-3 text-center">
      {showQR?<h5>Pay Using QR</h5>:<h5>💰 Choose Payment Method</h5>}
        <div className="d-flex  mt-3">
        {!showQR &&  <button className="btn btn-success w-50 me-2" onClick={handleQr}>Pay via QR</button>}
        {!showQR && <button className="btn btn-primary w-50" onClick={proceedOrder}>Pay via Card</button>}
        </div>
      

      {showQR && (
        <div className="text-center mt-4">
          <h5>Scan & Pay</h5>
          <QRCodeCanvas value={upiLink} size={200} includeMargin />
          <p className="mt-2">Pay ₹{finalPrice.toFixed(2)}</p>
          <button className="btn btn-success mt-2" onClick={proceedOrder}>I have Paid</button>
        </div>
      )}
      </div>
    </div>

</div>
</div>
</>
  );
}

export default Cart;
