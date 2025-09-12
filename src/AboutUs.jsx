import React, { useRef } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import StorefrontIcon from "@mui/icons-material/Storefront";
import EcoIcon from "@mui/icons-material/Grass";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import CandyIcon from "@mui/icons-material/Cookie";
import EggIcon from "@mui/icons-material/Egg";
import MedicationIcon from "@mui/icons-material/Medication";
import "@fontsource/roboto";
import "./AboutUs.css"; // CSS for animations and hover effects

function AboutUs() {
  const harvestRef = useRef(null);
  const drinksRef = useRef(null);
  const milkRef = useRef(null);
  const treatsRef = useRef(null);
  const nonVegRef = useRef(null);
  const medicineRef = useRef(null);
  const missionRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const Section = ({ children, reference }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    return (
      <div
        ref={(node) => {
          ref(node);
          if (reference) reference.current = node;
        }}
        className={`fade-section ${inView ? "fade-in" : ""}`}
      >
        {children}
      </div>
    );
  };

  return (
    <Container className="my-5" style={{ fontFamily: "Roboto, sans-serif" }}>
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">
          <StorefrontIcon className="me-2" /> About MiniMart
        </h1>
        <p className="text-muted fs-5">
          MiniMart is your ultimate online grocery destination, providing fresh produce, beverages,
          snacks, milk, non-veg items, and essential health products delivered to your doorstep.
        </p>
      </div>

      {/* Scroll Buttons */}
      <div className="text-center mb-5">
        <Button variant="outline-primary" className="me-2 mb-2" onClick={() => scrollToRef(harvestRef)}>
          <EcoIcon className="me-1" /> Harvest
        </Button>
        <Button variant="outline-success" className="me-2 mb-2" onClick={() => scrollToRef(drinksRef)}>
          <LocalBarIcon className="me-1" /> Drinks
        </Button>
        <Button variant="outline-info" className="me-2 mb-2" onClick={() => scrollToRef(milkRef)}>
          <LocalDrinkIcon className="me-1" /> Milk
        </Button>
        <Button variant="outline-warning" className="me-2 mb-2" onClick={() => scrollToRef(treatsRef)}>
          <CandyIcon className="me-1" /> Treats
        </Button>
        <Button variant="outline-danger" className="me-2 mb-2" onClick={() => scrollToRef(nonVegRef)}>
          <EggIcon className="me-1" /> Non-Veg
        </Button>
        <Button variant="outline-secondary" className="me-2 mb-2" onClick={() => scrollToRef(medicineRef)}>
          <MedicationIcon className="me-1" /> Medicine
        </Button>
        <Button variant="outline-dark" className="me-2 mb-2" onClick={() => scrollToRef(missionRef)}>
          🌟 Mission & Vision
        </Button>
      </div>

      {/* Sections */}
      <Section reference={harvestRef}>
        <Row className="align-items-center g-4 mb-5">
          <Col md={6}>
            <img src="/public/carasol/vegetables.jpg" alt="Fresh Veg & Fruits" className="img-fluid rounded hover-scale" />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold text-success mb-3">
              <EcoIcon className="me-2" /> Harvest (Vegetables & Fruits)
            </h2>
            <p>
              MiniMart brings you the freshest vegetables and fruits, sourced directly from trusted farms.
              Our selection includes seasonal fruits, leafy greens, root vegetables, and exotic produce. 
              Each product is carefully inspected for quality and freshness before it reaches your doorstep. 
              We believe in sustainable farming practices, ensuring minimal use of chemicals and maximum nutrition. 
              Our delivery is fast and reliable, preserving natural flavors and vitamins. 
              Enjoy farm-to-table freshness with every purchase.
            </p>
          </Col>
        </Row>
      </Section>

      <Section reference={drinksRef}>
        <Row className="align-items-center g-4 flex-md-row-reverse mb-5">
          <Col md={6}>
            <img src="/public/carasol/drinks.jpg" alt="Drinks & Juices" className="img-fluid rounded hover-scale" />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold text-primary mb-3">
              <LocalBarIcon className="me-2" /> Drinks & Juices
            </h2>
            <p>
              Refresh yourself with soft drinks, fresh juices, smoothies, and shakes. Our drinks retain
              natural flavors and nutrients. Perfect for daily refreshment or parties. Variety includes
              seasonal juices, exotic flavors, and traditional favorites. Enjoy convenience, hygiene, and
              quality with every sip delivered to your home.
            </p>
          </Col>
        </Row>
      </Section>

      <Section reference={milkRef}>
        <Row className="align-items-center g-4 mb-5">
          <Col md={6}>
            <img src="/public/carasol/classic-glass-bottle-milk.jpg" alt="Milk & Dairy" className="img-fluid rounded hover-scale" />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold text-info mb-3">
              <LocalDrinkIcon className="me-2" /> Milk & Dairy
            </h2>
            <p>
              Our dairy section offers milk, yogurt, butter, and cheese from trusted farms. Full cream,
              toned, and flavored milk options are available. Dairy products provide essential nutrients,
              support healthy bones, and maintain overall wellness. We ensure freshness, hygiene, and
              quality for every family.
            </p>
          </Col>
        </Row>
      </Section>

      <Section reference={treatsRef}>
        <Row className="align-items-center g-4 flex-md-row-reverse mb-5">
          <Col md={6}>
            <img src="/public/carasol/snacks.jpg" alt="Treats & Snacks" className="img-fluid rounded hover-scale" />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold text-warning mb-3">
              <CandyIcon className="me-2" /> Treats & Snacks
            </h2>
            <p>
              Indulge in sweets, chocolates, cookies, and savory snacks. Perfect for daily indulgence,
              celebrations, or gifting. Hygienically packed, preserving flavor and freshness. Explore
              traditional favorites, international goodies, and healthy alternatives. MiniMart ensures
              variety, quality, and affordability.
            </p>
          </Col>
        </Row>
      </Section>

      <Section reference={nonVegRef}>
        <Row className="align-items-center g-4 mb-5">
          <Col md={6}>
            <img src="/public/carasol/nonveg.jpg" alt="Non-Veg" className="img-fluid rounded hover-scale" />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold text-danger mb-3">
              <EggIcon className="me-2" /> Non-Veg
            </h2>
            <p>
              Fresh meat, eggs, and seafood from reliable suppliers. Protein-rich ingredients for
              daily cooking or special occasions. High standards for storage and delivery ensure
              safety and quality. Enjoy variety and convenience in every purchase.
            </p>
          </Col>
        </Row>
      </Section>

      <Section reference={medicineRef}>
        <Row className="align-items-center g-4 flex-md-row-reverse mb-5">
          <Col md={6}>
            <img src="/public/carasol/medicines.jpg" alt="Medicines & Health" className="img-fluid rounded hover-scale" />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold text-secondary mb-3">
              <MedicationIcon className="me-2" /> Medicines & Health
            </h2>
            <p>
              Essential medicines, vitamins, and supplements from trusted brands. Prescription and
              over-the-counter products delivered safely. Supporting your health and wellness every
              day with convenience and reliability.
            </p>
          </Col>
        </Row>
      </Section>

      <Section reference={missionRef}>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-4">🌟 Our Mission & Vision</h2>
          <p>
            <strong>Mission:</strong> Deliver fresh, high-quality groceries and health products
            with convenience and reliability, ensuring customer satisfaction every time.
          </p>
          <p>
            <strong>Vision:</strong> Become the most trusted online grocery platform,
            providing healthy, affordable, and diverse products for families everywhere.
          </p>
          <p>
            <strong>Values:</strong> Quality, Freshness, Reliability, Sustainability,
            Customer Satisfaction, Innovation, and Community Support.
          </p>
        </div>
      </Section>
    </Container>
  );
}

export default AboutUs;
