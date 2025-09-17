import React, { useRef,useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import if using React Router
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import './Home.css'
import {  Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


function Home() {
const isMobile = useMediaQuery({ maxWidth: 480 }); // Mobile: <= 768px
const [timeLeft, setTimeLeft] = useState({});
  const categoriesRef = useRef(null);
  const offers = [
  {
    id: 1,
    title: "Weekend Sale!",
    description: "Up to 30% off on all vegetables.",
    image: "/offers/vegetable-sale.jpg",
    endDate: "2025-09-15T23:59:59",
  },
  {
    id: 2,
    title: "Buy 2 Get 1 Free",
    description: "Applicable on selected fruits.",
    image: "/public/weekend.png",
    endDate: "2025-09-12T23:59:59",
  },
];

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
  }, []);

 const products = [
  { id: 4, name: "Apples", image: "/public/veg/apples.webp", price: 80 },
   { id: 3, name: "Carrots", image: "/veg/carrot.png", price: 50, offerPrice: 45 },
 { id: 2, name: "Bendi", image: "/veg/bendi.png", price: 30 },
  { id: 1, name: "Fresh Tomatoes", image: "/veg/tomato.png", price: 40, offerPrice: 35 },
 
  { id: 5, name: "Milk", image: "/public/milk/buffalo-milk.webp", price: 25 },
  { id: 6, name: "Juice Drinks", image: "/public/drinks/orange-juice.png", price: 60 },
  { id: 7, name: "Snacks", image: "/public/treats/murukku.webp", price: 35 },
  { id: 8, name: "Fish", image: "/public/nonveg/fish.png", price: 150 },
  { id: 9, name: "Medicines", image: "/public/medicines/cetirizine.png", price: 200 },
];


// Group products into slides (3 per slide on desktop)
  const slides = [];
  const chunkSize = 4;
  for (let i = 0; i < products.length; i += chunkSize) {
    slides.push(products.slice(i, i + chunkSize));
  }

// Active slide state
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    const carouselEl = carouselRef.current;

    // Listen for Bootstrap slide event
    const handleSlide = (e) => {
      const nextIndex = parseInt(e.to);
      setActiveIndex(nextIndex);
    };

    carouselEl.addEventListener("slide.bs.carousel", handleSlide);

    return () => {
      carouselEl.removeEventListener("slide.bs.carousel", handleSlide);
    };
  }, []);


 

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
    image: "/public/carasol/user3.webp",
    rating: 5,
  },
  {
    text: "Loved the organic vegetables. Very fresh and affordable!",
    name: "Priya Patel",
    image: "/public/carasol/user4.jpg",
    rating: 4,
  },
  {
    text: "Fast delivery and great packaging. Will order again.",
    name: "Rahul Verma",
    image: "/public/carasol/user1.webp",
    rating: 5,
  },
  {
    text: "Wide variety of grocery items at reasonable prices.",
    name: "Sneha Reddy",
    image: "/public/carasol/user5.webp",
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



  return (
    <div className="container-fluid p-0 bg-light">
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
      <h2 className="text-center fw-bold mb-4">Featured Products</h2>

      {!isMobile ? (

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
                    <Card.Title className="text-truncate">{product.name}</Card.Title>
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
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                  
                </Card>
                
              </SwiperSlide>
            ))}
            
          </Swiper>
        </div>
          
      ) : (
        // ---------- Mobile Horizontal Scroll ----------
        <div className="d-flex gap-3 pb-2 px-2 overflow-auto" style={{ scrollSnapType: "x mandatory" }}>
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
                <Button variant="primary" size="sm">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
 
    <section ref={categoriesRef} className="container py-5">
      <h2 className="text-center fw-bold mb-4">🛍 Shop by Category</h2>

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
      <h2 className="text-center fw-bold mb-4">Why Choose Us</h2>
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
  <h2 className="mb-4 text-center fw-bold">🔥 Special Offers</h2>

  <div className="row g-4 justify-content-center">
    {offers.map((offer) => (
      <div
        key={offer.id}
        className="col-lg-4 col-md-6 col-12"
      >
        <Card className="offer-card shadow-sm h-100 position-relative text-white">
          <div className="offer-img-wrapper">
            <Card.Img src={offer.image} alt={offer.title} />
            <div className="offer-overlay">
              <Card.Title>{offer.title}</Card.Title>
              <Card.Text>{offer.description}</Card.Text>
              <Card.Text className="fw-bold countdown">
                Ends in: {timeLeft[offer.id]}
              </Card.Text>
              <Button variant="light" size="sm">Shop Now</Button>
            </div>
          </div>
        </Card>
      </div>
    ))}
  </div>
</div>



 <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 text-success">
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
