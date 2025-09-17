import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { loginUser } from "./store"; // your thunk


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [iconFade, setIconFade] = useState(true);
  const [role, setRole] = useState("customer");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const emailRef = useRef();
  const passwordRef = useRef();
  const toastShown= useRef();



  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // Right after getting location and redirectTo


  const redirectTo = location.state?.from || "/";
    const fromCart = redirectTo === "/cart";

  const user = useSelector((state) => state.users); // your Redux slice

  // Watch for user state changes
  useEffect(() => {
    // Customer login success
    if (user.isAuthenticated && role === "customer") {
      toast.success("✅ Login Successful!");
      navigate(redirectTo, { replace: true });
    }

    // Login failed
    if (!user.isAuthenticated && user.error) {
      toast.error("❌ Login failed! Check your email/password.");
      
    }
  }, [user, navigate, redirectTo, role]);


useEffect(() => {
  if (fromCart && !toastShown.current) {
    toast.info("Please login to continue with your cart");
    toastShown.current = true;
  }
}, [fromCart]);




  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;
    const newErrors = { email: "", password: "" };
    const email = emailRef.current?.value.trim() || "";
    const password = passwordRef.current?.value.trim() || "";

    // Email validation
    if (!email) {
      newErrors.email = "Email is required!";
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
      hasError = true;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    if (!password) {
      newErrors.password = "Password is required!";
      hasError = true;
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be 6+ chars with capital, small, number & symbol.";
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    // Handle login (admin check)
    handleLogin(email, password);
  };

  const handleLogin = (email, password) => {
    if (email === "admin@minimart.com" && password === "Admin@123" && role === "admin") {
      toast.success("✅ Admin Login Successful!");
      navigate("/admin-dashboard");
      return;
    }

    if (role === "customer") {
      // Dispatch thunk, no await
      dispatch(loginUser({ email, password }));
    } else {
      toast.error("❌ Invalid Credentials!");
    }
  };

  const handleTogglePassword = () => {
    setIconFade(false);
    setTimeout(() => {
      setShowPassword((prev) => !prev);
      setIconFade(true);
    }, 150);
  };

  return (
   <>
  <div
    className="d-flex align-items-center justify-content-center vh-100 px-2"
    style={{
      background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    }}
  >
    <div
      className="card shadow p-4"
      style={{
        width: "100%",
        maxWidth: "350px",
        borderRadius: "20px",
        background: "white",
      }}
    >
      <h2 className="text-center mb-4 text-primary fw-bold">Login</h2>

      {/* Role Selection */}
      <div className="mb-3 text-center">
        <div className="btn-group">
          <input
            type="radio"
            className="btn-check"
            name="role"
            id="admin"
            value="admin"
            checked={role === "admin"}
            onChange={(e) => setRole(e.target.value)}
          />
          <label className="btn btn-outline-primary" htmlFor="admin">
            Admin
          </label>
          <input
            type="radio"
            className="btn-check"
            name="role"
            id="customer"
            value="customer"
            checked={role === "customer"}
            onChange={(e) => setRole(e.target.value)}
          />
          <label className="btn btn-outline-primary" htmlFor="customer">
            Customer
          </label>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text bg-primary text-white">
              <EmailIcon fontSize="small" />
            </span>
            <input
              type="email"
              ref={emailRef}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Email Address"
            />
          </div>
          {errors.email && (
            <div className="invalid-feedback d-block">{errors.email}</div>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text bg-primary text-white">
              <LockIcon fontSize="small" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              ref={passwordRef}
              className={`form-control ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="Password"
            />
          </div>
          {errors.password && (
            <div className="invalid-feedback d-block mt-1">
              {errors.password}
            </div>
          )}
          {/* Show Password Checkbox */}
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label className="form-check-label" htmlFor="showPassword">
              Show Password
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-bold">
          Login
        </button>

        <div className="text-center mt-3">
          <p className="mb-0">
            Not registered?{" "}
            <a href="/register" className="text-primary fw-bold">
              Create an account
            </a>
          </p>
        </div>
      </form>
    </div>
  </div>
</>

  );
}
