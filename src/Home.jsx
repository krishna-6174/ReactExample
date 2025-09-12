import React, { useRef,useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import if using React Router
import { useMediaQuery } from "react-responsive";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import "./Home.css";

function Home() {

const isMobile = useMediaQuery({ maxWidth: 768 }); // Mobile: <= 768px
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
  { id: 1, name: "Fresh Tomatoes", image: "/veg/tomato.png", price: 40, offerPrice: 35 },
  { id: 2, name: "Cucumber", image: "/veg/bendi.png", price: 30 },
  { id: 3, name: "Carrots", image: "/veg/carrot.png", price: 50, offerPrice: 45 },
  { id: 4, name: "Apples", image: "/fruits/apples.jpg", price: 80 },
  { id: 5, name: "Milk", image: "/milk/milk-bottle.jpg", price: 25 },
  { id: 6, name: "Juice Drinks", image: "/drinks/juice.jpg", price: 60 },
  { id: 7, name: "Snacks", image: "/treats/snacks.jpg", price: 35 },
  { id: 8, name: "Fish", image: "/nonveg/fish.jpg", price: 150 },
  { id: 9, name: "Medicines", image: "/medicine/pills.jpg", price: 200 },
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
      text: "Amazing quality and super fast delivery! I love shopping here.",
      name: "Priya S.",
    },
    {
      text: "Fresh vegetables and fruits every time. Excellent service.",
      name: "Rahul K.",
    },
    {
      text: "Affordable prices and easy returns. Highly recommend!",
      name: "Anjali M.",
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
    <section className="container my-5">
      <h2 className="text-center fw-bold mb-4">Featured Products</h2>

      {!isMobile ? (
        // ---------- Desktop Carousel ----------
        <div
          id="featuredCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
          ref={carouselRef}
        >
          <div className="carousel-inner">
            {slides.map((slide, idx) => (
              <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
                <div className="d-flex justify-content-center gap-3">
                  {slide.map((product) => (
                    <Card key={product.id} className="text-center shadow-sm border-0" style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={product.image}
                        style={{ height: "180px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                          {product.offerPrice ? (
                            <>
                              <span className="text-danger fw-bold">${product.offerPrice}</span>{" "}
                              <del className="text-muted">${product.price}</del>
                            </>
                          ) : (
                            <span className="fw-bold">${product.price}</span>
                          )}
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ---------- Custom Indicators Below Cards ---------- */}
          <div className="d-flex justify-content-center mt-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                data-bs-target="#featuredCarousel"
                data-bs-slide-to={idx}
                className={`mx-1  ${activeIndex === idx ? "bg-primary" : "bg-secondary"}`}
                aria-current={activeIndex === idx ? "true" : undefined}
                aria-label={`Slide ${idx + 1}`}
                style={{ width: "10px", height: "2px", border: "none", opacity: 1, cursor: "pointer" }}
              />
            ))}
          </div>
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
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title fw-bold">{product.name}</h6>
                <p className="card-text">
                  {product.offerPrice ? (
                    <>
                      <span className="text-danger fw-bold">${product.offerPrice}</span>{" "}
                      <del className="text-muted">${product.price}</del>
                    </>
                  ) : (
                    <span className="fw-bold">${product.price}</span>
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
        <div
          id="categoryCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          data-bs-pause="false"
        >
          <div className="carousel-inner">
            {carouselSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-item text-center ${
                  index === 0 ? "active" : ""
                }`}
              >
                {/* Make image clickable */}
                <Link to={slide.link} style={{ textDecoration: "none", color: "inherit" }}>
                  <img
                    src={slide.imagePath}
                    className="d-block mx-auto category-img"
                    alt={slide.title}
                    style={{
                      cursor: "pointer",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  />
                  <h5 className="mt-3 fw-bold">{slide.title}</h5>
                </Link>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#categoryCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon bg-dark rounded-circle p-3"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#categoryCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon bg-dark rounded-circle p-3"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}

      {/* ---------- MOBILE VIEW (Horizontal Scrollable Cards) ---------- */}
{isMobile && (
  <div
    className="d-flex gap-3 pb-2 px-2"
    style={{
      overflowX: "auto",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      scrollSnapType: "x mandatory",
      WebkitOverflowScrolling: "touch",
    }}
  >
    {/* Hide scrollbar visually */}
    <style>
      {`
        div::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>

   
    {
     carouselSlides.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="card shadow-sm flex-shrink-0 border-0"
              style={{
                width: "70vw",
                scrollSnapAlign: "start",
                borderRadius: "15px",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={item.imagePath}
                className="card-img-top"
                alt={item.title}
                style={{
                  height: "180px",
                  objectFit: "cover",
                  borderBottom: "2px solid #f0f0f0",
                }}
              />
              <div className="card-body text-center">
                <h6 className="card-title fw-bold">{item.title}</h6>
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
  <h2 className="mb-4 text-center">Special Offers</h2>

  <div className="row justify-content-center g-3">
    {offers.map((offer) => (
      <div key={offer.id} className="col-md-4 col-sm-6 col-12">
        <Card className="offer-card text-white shadow-sm h-100 position-relative">
          <Card.Img
            src={offer.image}
            alt={offer.title}
            style={{ height: "220px", objectFit: "cover", borderRadius: "10px" }}
          />
          <Card.ImgOverlay className="d-flex flex-column justify-content-end bg-dark bg-opacity-50 p-3" style={{ borderRadius: "10px" }}>
            <Card.Title>{offer.title}</Card.Title>
            <Card.Text>{offer.description}</Card.Text>
            <Card.Text className="fw-bold">Ends in: {timeLeft[offer.id]}</Card.Text>
            <Button variant="light" size="sm">Shop Now</Button>
          </Card.ImgOverlay>
        </Card>
      </div>
    ))}
  </div>
</div>







        {/*testimonial carousel*/}
         <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">What Our Customers Say</h2>

      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-pause="false"
        data-bs-interval="4000" // auto-slide every 4 sec
      >
        <div className="carousel-inner">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`testimonial-item carousel-item text-center ${
                index === 0 ? "active" : ""
              }`}
            >
              <p className="testimonial-text">"{t.text}"</p>
              <h6 className="testimonial-name">– {t.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>


    </div>
  );
}

export default Home;
