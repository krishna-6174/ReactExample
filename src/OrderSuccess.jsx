import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import successAnimation from "./success.json"; // from lottiefiles.com
import successSound from "./success.mp3"; // download a soft chime sound

export default function OrderSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId, amount } = location.state || { orderId: "N/A", amount: 0 };

  const [showContent, setShowContent] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // 🎆 Controlled Confetti Burst
    const count = 80;
    const defaults = { origin: { y: 0.7 } };
    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });

    // 🔊 Play Success Sound
    const audio = new Audio(successSound);
    audio.play();

    // Reveal animations with delay
    setTimeout(() => setShowContent(true), 1200);
    setTimeout(() => setShowButtons(true), 2200);
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 position-relative"
      style={{
        background: "linear-gradient(135deg, #e0fce7 0%, #ffffff 100%)",
        overflow: "hidden",
      }}
    >
      {/* 🎈 Floating Background Particles */}
      <div className="bg-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Main Card */}
      <motion.div
          className="shadow-lg p-4 p-md-5 text-center position-relative my-3 order-success-card"
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(10px)",
            borderRadius: "1.5rem",
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >

        {/* 🎬 Lottie Animation */}
        <div className="position-relative mb-3" style={{ minHeight: "200px" }}>
          <Lottie
            animationData={successAnimation}
            loop={false}
            style={{ width: "180px", height: "180px", margin: "0 auto" }}
          />
          {/* Sparkles effect */}
          <div className="sparkles"></div>
        </div>

        {/* Smoothly Appearing Content */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="fw-bold text-success mb-3"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, type: "spring" }}
              >
                🎉 Order Placed Successfully!
              </motion.h2>

              <p className="text-muted mb-4">
                Your payment was successful and your order is confirmed.
              </p>

              {/* Order Summary */}
              <motion.div
                className="bg-light rounded-3 p-3 mb-4 border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="mb-2">
                  <strong>Order ID:</strong> {orderId}
                </p>
                <p className="mb-2">
                  <strong>Amount Paid:</strong> ₹{amount}
                </p>
                <p className="mb-0">
                  <strong>Estimated Delivery:</strong> Sep 10, 2025
                </p>
              </motion.div>

              {/* Buttons Appear Last */}
              <AnimatePresence>
                {showButtons && (
                  <motion.div
                    className="d-flex justify-content-center gap-3 flex-wrap"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <button
                      className="btn btn-success px-4"
                      onClick={() => navigate("/orders")}
                    >
                      View Orders
                    </button>
                    <button
                      className="btn btn-outline-secondary px-4"
                      onClick={() => navigate("/")}
                    >
                      Continue Shopping
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Extra Styles */}
        <style>
          {`
             /* Card Width Control */
      .order-success-card {
        max-width: 1000px;
      }

      /* Medium screens (tablets) */
      @media (max-width: 768px) {
        .order-success-card {
          max-width: 90%;
          padding: 1.5rem;
        }
      }

      /* Small screens (phones) */
      @media (max-width: 480px) {
        .order-success-card {
          max-width: 95%;
          padding: 1rem;
        }

        .order-success-card h2 {
          font-size: 1.3rem;
        }

        .order-success-card p {
          font-size: 0.9rem;
        }

        .order-success-card button {
          width: 100%;
          margin-bottom: 0.5rem;
        }
      }

      /* Floating Particles (unchanged) */
      .bg-particles {
        position: absolute;
        inset: 0;
        overflow: hidden;
        z-index: 0;
      }
      .bg-particles span {
        position: absolute;
        display: block;
        width: 15px;
        height: 15px;
        background: rgba(72, 187, 120, 0.15);
        border-radius: 50%;
        animation: floatUp 8s linear infinite;
      }
      .bg-particles span:nth-child(1) { left: 10%; animation-delay: 0s; }
      .bg-particles span:nth-child(2) { left: 40%; animation-delay: 2s; }
      .bg-particles span:nth-child(3) { left: 70%; animation-delay: 4s; }
      .bg-particles span:nth-child(4) { left: 85%; animation-delay: 6s; }

      @keyframes floatUp {
        0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
        50% { opacity: 0.5; }
        100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
      }

      .sparkles {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200px;
        height: 200px;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, #fff8 20%, transparent 70%);
        animation: sparkle 1.5s infinite ease-in-out;
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
      }
      @keyframes sparkle {
        0%, 100% { opacity: 0.3; transform: scale(1) translate(-50%, -50%); }
        50% { opacity: 0.7; transform: scale(1.1) translate(-50%, -50%); }
      }
          `}
        </style>
      </motion.div>
    </div>
  );
}
