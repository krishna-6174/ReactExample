import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,incrementQuantity,decrementQuantity } from "./store";
import { addToWishlist, removeFromWishlist } from "./store";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import "./Card.css";

function Card({ item }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);
  const isWishlisted = wishlist.some((w) => w.id === item.id);
const cartItem = cart.find((c) => c.id === item.id);
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.info(`${item.title} added to cart!`);
  };
  const handleIncrease = () => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrease = () => {
    dispatch(decrementQuantity(item));
  };

  const toggleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(item.id));
      toast.warn(`${item.title} removed from wishlist`);
    } else {
      dispatch(addToWishlist(item));
      toast.success(`${item.title} added to wishlist`);
    }
  };

  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card h-100 shadow-lg border-0 rounded-2 custom-card">
        {/* Wishlist Icon (no button) */}
        <span
          className={`wishlist-icon ${isWishlisted ? "active" : ""}`}
          onClick={toggleWishlist}
        >
          {isWishlisted ? (
            <HeartFill size={20} />
          ) : (
            <Heart size={20} />
          )}
        </span>

        {/* Product Image */}
        <img src={item.image} alt={item.title} className="card-img-top product-img" />

        <div className="card-body text-center">
          <h5 className="card-title fw-bold text-truncate-2">{item.title}</h5>
          <p className="card-text text-muted small product-description text-truncate-2">
            {item.description}
          </p>
          <h6 className="price-tag fw-bold text-success">₹ {item.price}</h6>

            {cartItem ? (
            <div className="quantity-control">
  <button className="qty-btn minus" onClick={handleDecrease}>-</button>
  <span className="qty-number">{cartItem.quantity}</span>
  <button className="qty-btn plus" onClick={handleIncrease}>+</button>
</div>
          ) : (
            <button
              className="btn btn-gradient w-100 fw-semibold add-to-cart-btn"
              onClick={handleAddToCart}
            >
              🛒 Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
