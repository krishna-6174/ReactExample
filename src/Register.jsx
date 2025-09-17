import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Register() {
 const navigate = useNavigate();
   
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
const dispatch = useDispatch();
  const password = watch("password");

   const onSubmit = (data) => {
    // ✅ Send data to Redux store
    dispatch(registerUser(data));
    toast.success("✅ Registration Successful!");
    navigate('/login');


    
    // ✅ Redirect to cart if came from there, else homepage
    
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center px-2"
      style={{
        background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
      }}
    >
      <div
        className="card shadow p-4 my-5"
        style={{ width: "100%", maxWidth: "500px", borderRadius: "20px" }}
      >
        <h2 className="text-center mb-4 text-primary fw-bold">Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text bg-primary text-white">
                <PersonIcon fontSize="small" />
              </span>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Full Name"
                {...register("name", { required: "Full Name is required" })}
              />
            </div>
            {errors.name && (
              <div className="text-danger small">{errors.name.message}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text bg-primary text-white">
                <EmailIcon fontSize="small" />
              </span>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Enter a valid email",
                  },
                })}
              />
            </div>
            {errors.email && (
              <div className="text-danger small">{errors.email.message}</div>
            )}
          </div>
          {/* Password */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text bg-primary text-white">
                <LockIcon fontSize="small" />
              </span>
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </div>
            {errors.password && (
              <div className="text-danger small">
                {errors.password.message}
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text bg-primary text-white">
                <LockIcon fontSize="small" />
              </span>
              <input
                type="password"
                className={`form-control ${
                  errors.confirm ? "is-invalid" : ""
                }`}
                placeholder="Confirm Password"
                {...register("confirm", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
            </div>
            {errors.confirm && (
              <div className="text-danger small">{errors.confirm.message}</div>
            )}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text bg-primary text-white">
                <PhoneIcon fontSize="small" />
              </span>
              <input
                type="text"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
              />
            </div>
            {errors.phone && (
              <div className="text-danger small">{errors.phone.message}</div>
            )}
          </div>

          {/* Address */}
          <div className="mb-3 input-group">
            <span className="input-group-text bg-primary text-white">
              <HomeIcon fontSize="small" />
            </span>
            <input
              type="text"
              className={`form-control ${errors.street ? "is-invalid" : ""}`}
              placeholder="Street Address"
              {...register("street", { required: "Street is required" })}
            />
          </div>
          {errors.street && (
            <div className="text-danger small">{errors.street.message}</div>
          )}

          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                className={`form-control ${errors.city ? "is-invalid" : ""}`}
                placeholder="City"
                {...register("city", { required: "City is required" })}
              />
              {errors.city && (
                <div className="text-danger small">{errors.city.message}</div>
              )}
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className={`form-control ${errors.state ? "is-invalid" : ""}`}
                placeholder="State"
                {...register("state", { required: "State is required" })}
              />
              {errors.state && (
                <div className="text-danger small">{errors.state.message}</div>
              )}
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className={`form-control ${errors.zip ? "is-invalid" : ""}`}
                placeholder="ZIP"
                {...register("zip", {
                  required: "ZIP is required",
                  pattern: {
                    value: /^\d{5,6}$/,
                    message: "Enter valid ZIP code",
                  },
                })}
              />
              {errors.zip && (
                <div className="text-danger small">{errors.zip.message}</div>
              )}
            </div>
          </div>

          {/* Gender */}
          <div className="mb-3 text-center">
            <div className="btn-group">
              <input
                type="radio"
                className="btn-check"
                id="male"
                value="male"
                defaultChecked
                {...register("gender")}
              />
              <label className="btn btn-outline-primary" htmlFor="male">
                Male
              </label>

              <input
                type="radio"
                className="btn-check"
                id="female"
                value="female"
                {...register("gender")}
              />
              <label className="btn btn-outline-primary" htmlFor="female">
                Female
              </label>
            </div>
          </div>

          {/* Newsletter */}
         
          {/* Submit */}
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Register
          </button>

          <div className="text-center mt-3">
            <p className="mb-0">
              Already have an account?{" "}
              <a href="/login" className="text-primary fw-bold">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
