import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromWishlist, addToWishlist } from "./store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Heart, HeartFill, StarFill } from "react-bootstrap-icons";
import "./Wishlist.css"; // External CSS for styles

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

   // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
  
    // Calculate slice indexes
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = wishlist.slice(indexOfFirstItem, indexOfLastItem);
  
    // Total pages calculation
    const totalPages = Math.ceil(wishlist.length / itemsPerPage);

    // Page change handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  

  if (wishlist.length === 0) {
  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="d-flex flex-column align-items-center justify-content-center bg-white shadow-lg rounded-5 p-4 p-md-5 text-center" style={{ maxWidth: "400px", width: "100%" }}>
        {/* Empty Wishlist Image */}
        <img
          src="/empty-wishlist.png"
          alt="Empty Wishlist"
          className="mb-4 img-fluid"
          style={{ maxWidth: "250px" }}
        />

        {/* Main Heading */}
        <h4 className="text-danger mb-2">💔 Your wishlist is feeling lonely! 🌟</h4>

        {/* Funny Subtext */}
        <p className="text-muted mb-4 small">
         💭 It’s waiting for your favorite goodies… don’t leave it hanging! 🎁✨
        </p>

        {/* CTA Button */}
        <button
          className="btn btn-outline-primary rounded-pill px-4 py-2"
          style={{ transition: "all 0.3s" }}
          onMouseEnter={e => e.currentTarget.classList.add("btn-success", "text-white")}
          onMouseLeave={e => e.currentTarget.classList.remove("btn-success", "text-white")}
          onClick={() => navigate("/")}
        >
          Find Your Favorites
        </button>
      </div>
    </div>
  );
}


  return (
    <div className="container my-4">
      <h3 className="mb-4">My Wishlist</h3>
      <div className="row g-3">
        {currentItems.map((item) => {
          const finalPrice = item.discount
            ? item.price - (item.price * item.discount) / 100
            : item.price;

          const isWishlisted = wishlist.some((w) => w.id === item.id);

          const toggleWishlist = () => {
            if (isWishlisted) {
              dispatch(removeFromWishlist(item.id));
              toast.info(`${item.title} removed from wishlist`);
            } else {
              dispatch(addToWishlist(item));
              toast.success(`${item.title} added to wishlist`);
            }
          };

          return (
            <div key={item.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm position-relative">
                {/* Wishlist ❤️ Icon */}
                <span
                  className={`wishlist-icon ${isWishlisted ? "active" : ""}`}
                  onClick={toggleWishlist}
                  title={
                    isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"
                  }
                >
                  {isWishlisted ? (
                    <HeartFill size={20} className="text-danger" />
                  ) : (
                    <Heart size={20} className="text-muted" />
                  )}
                </span>

                {/* Product Image */}
                <img
                  src={item.image}
                  className="card-img-top p-3"
                  alt={item.title}
                  style={{
                    height: "180px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/product/${item.id}`)}
                />

                <div className="card-body d-flex flex-column">
                  {/* Product Name */}
                  <h6
                    className="card-title text-truncate"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    {item.title}
                  </h6>

                  {/* Rating */}
                  {item.rating && (
                    <div className="d-flex align-items-center mb-2">
                      <span className="badge bg-success me-2">
                        {item.rating.toFixed(1)} <StarFill size={12} />
                      </span>
                      <small className="text-muted">{item.reviewCount} reviews</small>
                    </div>
                  )}

                  {/* Price + Discount */}
                  <div className="mb-1">
                    <span className="fw-bold text-primary me-2">
                      ₹{finalPrice.toFixed(2)}
                    </span>
                    {item.discount > 0 && (
                      <>
                        <small className="text-muted text-decoration-line-through me-2">
                          ₹{item.price}
                        </small>
                        <span className="badge bg-warning text-dark">
                          {item.discount}% OFF
                        </span>
                      </>
                    )}
                  </div>

                  {/* Short Description */}
                  <p className="small text-muted mb-2 text-truncate">
                    {item.description}
                  </p>

                  {/* Move to Cart Button */}
                  <button
                    className="btn btn-primary btn-sm mt-auto"
                    onClick={() => {
                      dispatch(addToCart(item));
                      dispatch(removeFromWishlist(item.id));
                      toast.success(`${item.title} moved to cart`);
                    }}
                  >
                    🛒 Move to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            {/* Prev Button */}
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Prev
              </button>
            </li>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNum) => (
                <li
                  key={pageNum}
                  className={`page-item ${
                    currentPage === pageNum ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </button>
                </li>
              )
            )}

            {/* Next Button */}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
