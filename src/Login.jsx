import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useLocation } from "react-router-dom";
import { loginUser } from "./store";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [iconFade, setIconFade] = useState(true); // for fade animation
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const location = useLocation();
   
  const redirectTo = location.state?.from || "/"; // default redirect


  const [role, setRole] = useState("customer");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    let newErrors = { email: "", password: "" };

    const email = emailRef.current?.value.trim() || "";
    const password = passwordRef.current?.value.trim() || "";

    // Email validation
    if (email === "") {
      newErrors.email = "Email is required!";
      emailRef.current?.focus();
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
      emailRef.current?.focus();
      hasError = true;
    }

    // Password validation (capital, small, number, symbol)
    if (!hasError) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
      if (password === "") {
        newErrors.password = "Password is required!";
        passwordRef.current?.focus();
        hasError = true;
      } else if (!passwordRegex.test(password)) {
        newErrors.password =
          "Password must be 6+ chars with capital, small, number & symbol.";
        passwordRef.current?.focus();
        hasError = true;
      }
    }

    setErrors(newErrors);

    if (!hasError) {
      if (email === "admin@minimart.com" && password === "Admin@123" && role === "admin") {
        alert("✅ Admin Login Successful!");
        navigate("/admin-dashboard");
      } else if (role === "customer") {
        dispatch(loginUser({email,password}));
        toast.success("Login successfull!");
        navigate(redirectTo, { replace: true });
       
      } else {
        alert("❌ Invalid Credentials!");
      }
    }
  };

  // Toggle password visibility with fade animation
  const handleTogglePassword = () => {
    setIconFade(false); // trigger fade-out
    setTimeout(() => {
      setShowPassword((prev) => !prev);
      setIconFade(true); // fade back in
    }, 150); // short delay for smooth transition
  };

  return (
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

        {/* Admin/Customer Selection */}
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
  <div className="position-relative">
    <div className="input-group">
      <span className="input-group-text bg-primary text-white">
        <LockIcon fontSize="small" />
      </span>
      <input
        type={showPassword ? "text" : "password"}
        ref={passwordRef}
        className={`form-control ${errors.password ? "is-invalid" : ""}`}
        placeholder="Password"
        style={{ paddingRight: "40px" }} // ensures text doesn't overlap icon
      />
    </div>

    {/* Visibility Icon stays inside input box */}
    <span
      style={{
        position: "absolute",
        right: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        color: "#6c757d",
        opacity: iconFade ? 1 : 0,
        transition: "opacity 0.2s ease",
      }}
      onClick={handleTogglePassword}
    >
      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
    </span>
  </div>

  {/* Error Message (now below input, icon stays fixed) */}
  {errors.password && (
    <div className="invalid-feedback d-block mt-1">{errors.password}</div>
  )}
</div>


          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Login
          </button>

          {/* Registration Link */}
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
  );
}
