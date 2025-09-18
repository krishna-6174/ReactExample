import React, { useRef,useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import if using React Router
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useMemo } from "react";
import './Home.css'
import {  Navigation } from "swiper/modules";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { toast } from "react-toastify";
import { addToCart } from "./store";
import { useSelector } from "react-redux";


function Home() {
const isMobile = useMediaQuery({ maxWidth: 480 }); // Mobile: <= 768px
const [timeLeft, setTimeLeft] = useState({});
  const categoriesRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addDays = (days) => {
  const now = new Date();
  now.setDate(now.getDate() + days);
  return now.toISOString();
};
  const offers = useMemo(() => {
  return [
  {
    id: 1,
    title: "Weekend Sale!",
    description: "Up to 30% off on all vegetables.",
    image: "/weekend.png",
     endDate: addDays(2),
  },
  {
    
    id: 2,
    title: "Buy 2 Get 1 Free",
    description: "Applicable on selected fruits.",
    image: "/buu1get1.png",
     endDate: addDays(3),
  },
];
}, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const newTimeLeft = {};
      offers.forEach((offer) => {
        const distance = new Date(offer.endDate).getTime() - now;
        if (distance > 0) {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          newTimeLeft[offer.id] = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
          newTimeLeft[offer.id] = "Expired";
        }
      });
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [offers]);

 const products = [
  // Harvest (Veg & Fruits)
  { id: 1, title: "Fresh Tomatoes", description: "Farm-fresh juicy red tomatoes, rich in Vitamin C and perfect for curries, salads, soups, and sauces.", price: 40, offerPrice: 35, image: "/veg/tomato.png", rating: 4.5, reviewCount: 210, inStock: true },
  { id: 420, title: "Fresh Orange Juice", description: "100% freshly squeezed oranges, rich in Vitamin C and natural sweetness. Perfect immunity booster.", price: 90, discount: 8, rating: 4.9, reviewCount: 820, image: "/drinks/orange-juice.png", inStock: true },
  { id: 203, title: "Double Toned Milk", description: "Low-fat double toned milk, great for fitness-conscious individuals. Keeps you light while maintaining nutrition.", price: 45, discount: 8, rating: 4.4, reviewCount: 390, image: "/milk/double-toned.webp", inStock: true },
  { id: 102, title: "Premium Mutton", description: "Soft and flavorful mutton sourced from grass-fed goats. Ideal for slow-cooked curries, biryanis, and weekend feasts.", price: 550, offerPrice: 520, image: "/nonveg/mutton.webp", rating: 4.7, reviewCount: 320, inStock: true },
  { id: 308, title: "Cough Syrup", description: "Relieves both dry and wet cough, soothes throat irritation, and provides quick comfort for respiratory issues.", price: 90, discount: 7, rating: 4.5, reviewCount: 640, image: "/medicines/cough-syrup.webp", inStock: true },
  { id: 512, title: "Murukku", description: "Traditional South Indian crispy spiral snack made from rice flour and spices. Crunchy, savory, and addictive.", price: 140, discount: 7, rating: 4.7, reviewCount: 950, image: "/treats/murukku.webp", inStock: true },
 { id: 5, title: "Desi Carrots", description: "Bright orange, crunchy carrots full of natural sweetness and antioxidants. Excellent for salads, juices, stir-fries, and soups.", price: 45, offerPrice: 40, image: "/veg/carrot.png", rating: 4.6, reviewCount: 260, inStock: true },
{ id: 413, title: "Monster Energy", description: "High-performance energy drink with a bold flavor and extra caffeine boost. Popular among gamers and athletes.", price: 130, discount: 7, rating: 4.6, reviewCount: 2200, image: "/drinks/monster.jpg", inStock: true },
{ id: 206, title: "Buffalo Milk", description: "Thick and creamy buffalo milk, rich in calcium and flavor. Best for making curd, paneer, and sweets.", price: 65, discount: 7, rating: 4.5, reviewCount: 350, image: "/milk/buffalo-milk.webp", inStock: true },
 { id: 103, title: "Fresh River Fish", description: "Delicious river fish, rich in protein and omega-3, perfect for frying, steaming, or spicy fish curries.", price: 300, offerPrice: 280, image: "/nonveg/fish.png", rating: 4.4, reviewCount: 210, inStock: true },
{ id: 303, title: "Amoxicillin", description: "A powerful antibiotic used to treat bacterial infections like throat infection, pneumonia, and ear infections. Always use under prescription.", price: 120, discount: 10, rating: 4.5, reviewCount: 560, image: "/medicines/amoxicillin.png", inStock: true },
{ id: 501, title: "Rasgulla", description: "Delicate and spongy cottage cheese balls soaked in light sugar syrup. A melt-in-mouth treat that is light, refreshing, and perfect after meals.", price: 110, discount: 7, rating: 4.8, reviewCount: 980, image: "/treats/rasagulla.webp", inStock: true },
];




// Group products into slides (3 per slide on desktop)
  const slides = [];
  const chunkSize = 4;
  for (let i = 0; i < products.length; i += chunkSize) {
    slides.push(products.slice(i, i + chunkSize));
  }
 const cart = useSelector((state) => state.cart);




 

  const carouselSlides = [
    { id : 1, title : "Vegetables", imagePath : "/carasol/vegetables.jpg", link : "/harvest" },
    { id : 2, title : "Friuts", imagePath : "/carasol/side-view-fruits.jpg", link : "/harvest" },
    { id : 3, title : "Meat & Fish", imagePath : "/carasol/nonveg.jpg", link : "/nonveg" },
    { id : 4, title : "Beverages", imagePath : "/carasol/drinks.jpg", link : "/drinks"},
    { id : 5, title : "Milk & Diary", imagePath : "/carasol/classic-glass-bottle-milk.jpg",  link : "/milk"},
    { id : 6, title : "Medicines", imagePath : "/carasol/medicines.jpg", link : "/medicine" },
    { id : 7, title : "Snacks", imagePath : "/carasol/snacks.jpg", link : "/treats"}
  ]




       const features = [
    { icon: "bi-clock-fill", title: "Quick Delivery", desc: "Get groceries in 30 minutes" },
    { icon: "bi-basket3-fill", title: "Fresh & Quality", desc: "Handpicked items" },
    { icon: "bi-cash-stack", title: "Best Prices", desc: "Affordable everyday essentials" },
    { icon: "bi-box-seam", title: "Easy Returns", desc: "Hassle-free replacements" },
    { icon: "bi-shield-lock-fill", title: "Secure Payment", desc: "Safe & trusted checkout" },
    { icon: "bi-phone-fill", title: "24/7 Support", desc: "We are here to help you" },
  ];

const testimonials = [
  {
    text: "Fresh fruits delivered right on time! Quality was amazing.",
    name: "Amit Sharma",
    image: "/carasol/user3.webp",
    rating: 5,
  },
  {
    text: "Loved the organic vegetables. Very fresh and affordable!",
    name: "Priya Patel",
    image: "/carasol/user4.jpg",
    rating: 4,
  },
  {
    text: "Fast delivery and great packaging. Will order again.",
    name: "Rahul Verma",
    image: "/carasol/user1.webp",
    rating: 5,
  },
  {
    text: "Wide variety of grocery items at reasonable prices.",
    name: "Sneha Reddy",
    image: "/carasol/user5.webp",
    rating: 5,
  },
];
        const handleExplore = () =>{
         if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView({
        behavior: "smooth", // smooth scrolling effect
        block: "start", // scroll to the start of the section
      });
    }
        }


 const handleAddToCart = (item) => {
     dispatch(addToCart(item));
     toast.info(`${item.title} added to cart!`);
   };



  return (
    <div className="container-fluid p-0 custom-bg">
     <div className="hero-container">
      {/* image */}
      <img
        src="/top-view-delicious-groceries-paper-bag.jpg"
        alt="Groceries"
        className="hero-img"
      />

      {/* optional overlay */}
      <div className="hero-dim" />

      {/* animated text block */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="hero-title">Fresh &amp; Delicious</h1>
        <p className="hero-sub">
          Get fresh groceries delivered right to your doorstep. Shop now and
          enjoy exclusive offers!
        </p>

        <motion.a
          href="#shop"
          className="btn hero-cta bg-success text-white "
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          onClick={ handleExplore }
        >
          🛒 Shop Now
        </motion.a>
      </motion.div>
    </div>


    {/*option 2*/}
   <section className="container-fluid my-5">
  <h2 className="text-center fw-bold mb-4 text-dark">Featured Products</h2>

  {/* Get IDs of items in cart */}
  {(() => {
    const cartIds = cart?.map(item => item.id) || [];

    return !isMobile ? (
      // ---------- Desktop Swiper ----------
      <div className="m-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="custom-swiper"
        >
          {slides.flat().map((product) => (
            <SwiperSlide key={product.id}>
              <Card className="text-center shadow-sm border-0" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "180px", objectFit: "contain", borderRadius: "10px" }}
                />
                <Card.Body>
                  <Card.Title className="text-truncate">{product.title}</Card.Title>
                  <Card.Text>
                    {product.offerPrice ? (
                      <>
                        <span className="text-danger fw-bold">₹{product.offerPrice}</span>{" "}
                        <del className="text-muted">₹{product.price}</del>
                      </>
                    ) : (
                      <span className="fw-bold">₹{product.price}</span>
                    )}
                  </Card.Text>

                  {/* Conditional button */}
                  {cartIds.includes(product.id) ? (
                    <Button variant="outline-dark" onClick={() => navigate("/cart")}>
                      🛒 Go to Cart
                    </Button>
                  ) : (
                    <Button variant="primary" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    ) : (
      // ---------- Mobile Horizontal Scroll ----------
      <div
        className="d-flex gap-3 pb-2 px-2 overflow-auto"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <style>
          {`
            div::-webkit-scrollbar { display: none; }
          `}
        </style>

        {products.map((product) => (
          <div
            key={product.id}
            className="card shadow-sm flex-shrink-0 border-0"
            style={{
              width: "70vw",
              scrollSnapAlign: "start",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ height: "180px", objectFit: "contain" }}
            />
            <div className="card-body text-center">
              <h6 className="card-title fw-bold">{product.name}</h6>
              <p className="card-text">
                {product.offerPrice ? (
                  <>
                    <span className="text-danger fw-bold"> ₹{product.offerPrice}</span>{" "}
                    <del className="text-muted"> ₹{product.price}</del>
                  </>
                ) : (
                  <span className="fw-bold">₹{product.price}</span>
                )}
              </p>

              {/* Conditional button */}
              {cartIds.includes(product.id) ? (
                <Button variant="outline-dark" size="sm" onClick={() => navigate("/cart")}>
                  🛒 Go to Cart
                </Button>
              ) : (
                <Button variant="primary" size="sm" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  })()}
</section>

    <section ref={categoriesRef} className="container py-5">
      <h2 className="text-center fw-bold mb-4 text-dark">🛍 Shop by Category</h2>

      {/* ---------- DESKTOP/TABLET VIEW (Bootstrap Carousel) ---------- */}
       {!isMobile && (
        <Swiper
    modules={[Navigation, Autoplay]} // ❌ Removed Pagination
    spaceBetween={20}
    slidesPerView={1}
    navigation // ✅ enables < >
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    className="category-swiper"
  >
    {carouselSlides.map((slide) => (
      <SwiperSlide
        key={slide.id}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Link
          to={slide.link}
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "block",
          }}
        >
          <div
            style={{
              aspectRatio: "20/12",
              width: "60%",
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            <img
              src={slide.imagePath}
              alt={slide.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </div>
          <h5 className="mt-3 fw-bold text-center">{slide.title}</h5>
        </Link>
      </SwiperSlide>
    ))}
  </Swiper>
      )}
{/* mobile carousol */}
 {isMobile && (
  <div
      className="d-flex gap-3 pb-3 px-2 overflow-auto"
      style={{
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        scrollPadding: "0 1rem",
      }}
    >
      {carouselSlides.map((item) => (
        <Link
          key={item.id}
          to={item.link}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            className="card flex-shrink-0 shadow-sm border-0"
            style={{
              width: "70vw",
              scrollSnapAlign: "start",
              borderRadius: "15px",
              overflow: "hidden",
              backgroundColor: "#fff",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
            }}
          >
            {/* Image */}
            <div
              style={{
                width: "100%",
                //aspectRatio: "16/9",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f8f8f8",
              }}
            >
              <img
                src={item.imagePath}
                loading="lazy"
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  backgroundColor: "#f8f8f8", // optional: placeholder color while loading
                  transition: "transform 0.3s ease",
                }}
              />
            </div>

            {/* Card Body */}
            <div className="card-body text-center py-2 px-2">
              <h2
                className="card-title fw-bold"
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.3rem",
                  marginBottom: "0.25rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.title}
              </h2>
            </div>
          </div>
        </Link>
      ))}

    </div>
)}


    </section>



      {/* ---------- Why Choose Us Section ---------- */}
      <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 text-dark">Why Choose Us</h2>
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="choose-us-card border p-4 text-center h-100">
              <i className={`bi ${feature.icon} fs-1 text-primary`}></i>
              <h5 className="mt-3 fw-bold text-success">{feature.title}</h5>
              <p className="mt-2">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>



          {/*option 4*/}
         <div className="container my-5">
  {/* Section Title */}
  <h2 className="mb-4 text-center fw-bold text-dark">
    🔥 Special Offers
  </h2>

  <div className="row g-4 justify-content-center">
    {offers.map((offer) => (
      <div key={offer.id} className="col-lg-4 col-md-6 col-12">
        <Card className="offer-card border-0 shadow-lg h-100 rounded-3 overflow-hidden">
          {/* Image */}
          <Card.Img
            src={offer.image}
            alt={offer.title}
            className="offer-img img-fluid"
            style={{ height: "250px", width:"700px", objectFit: "cover" }}
          />

          {/* Overlay (desktop) + Info (mobile) */}
          <div className="offer-overlay d-none d-md-flex flex-column justify-content-center align-items-center text-center p-3">
            <h5 className="fw-bold">{offer.title}</h5>
            <p className="small mb-2">{offer.description}</p>
            <Card.Text className="fw-bold countdown mb-2">
              Ends in: {timeLeft[offer.id]}
            </Card.Text>
            <Button variant="light" size="sm" className="fw-bold px-3">
              Shop Now
            </Button>
          </div>

          {/* Mobile Info (always visible) */}
          <div className="d-flex d-md-none flex-column text-center bg-light p-3">
            <h6 className="fw-bold text-dark">{offer.title}</h6>
            <p className="small text-muted mb-1">{offer.description}</p>
            <Card.Text className="fw-bold text-danger mb-2">
              Ends in: {timeLeft[offer.id]}
            </Card.Text>
            <Button variant="primary" size="sm" className="fw-bold px-3">
              Shop Now
            </Button>
          </div>
        </Card>
      </div>
    ))}
  </div>
</div>



 <div className="container my-5">
      <h2 className="text-center  fw-bold mb-4 text-success">
        Happy Customers
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },     // Mobile
          768: { slidesPerView: 2 },   // Tablet
          1024: { slidesPerView: 3 },  // Laptop/Desktop
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div
              className="p-4 bg-white rounded-4 shadow-sm h-100"
              style={{ border: "1px solid #e9f5e9" }}
            >
              <div className="d-flex align-items-center mb-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-circle me-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    border: "2px solid #28a745",
                  }}
                />
                <div>
                  <h6 className="mb-0 fw-bold text-success">{t.name}</h6>
                  <div className="text-warning small">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={`bi ${
                          i < t.rating ? "bi-star-fill" : "bi-star"
                        }`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>

              <p className="fst-italic text-muted">“{t.text}”</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>


    </div>
  );
}
export default Home;
