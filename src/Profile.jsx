import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  ListGroup,
  Alert,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import SaveIcon from "@mui/icons-material/Save";
import LockIcon from "@mui/icons-material/Lock";
import HistoryIcon from "@mui/icons-material/History";
import { motion } from "framer-motion";
import { logoutUser, updateCurrentUser } from "./store";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get user from global state
  const user = useSelector((state) => state.users.currentUser);

  // Local state for editing
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordUpdate, setShowPasswordUpdate] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    password: "",
  });

  // Dummy recent orders
  const recentOrders = useSelector((state)=>state.orders)

  // Validation function
  const validateFields = () => {
    if (!formData.name.trim()) return "Name cannot be empty";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Enter a valid email";
    if (!/^\d{10}$/.test(formData.phone))
      return "Phone must be 10 digits only";
    if (showPasswordUpdate) {
      if (
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
          formData.password
        )
      ) {
        return "Password must contain upper, lower, number & symbol (min 8 chars)";
      }
    }
    return "";
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save updated details
  const handleSave = () => {
    const err = validateFields();
    if (err) {
      setError(err);
      return;
    }
    setError("");
    dispatch(updateCurrentUser(formData));
    setIsEditing(false);
    setShowPasswordUpdate(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-lg p-4 rounded-4">
              <Card.Body className="text-center">
                <AccountCircleIcon
                  style={{ fontSize: "5rem", color: "#0d6efd" }}
                  className="mb-3"
                />
                <h3 className="fw-bold">{user.name}</h3>
                <p className="text-muted">{user.email}</p>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form className="text-start">
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </Form.Group>

                  {isEditing && (
                    <>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="mb-3"
                        onClick={() => setShowPasswordUpdate(!showPasswordUpdate)}
                      >
                        <LockIcon fontSize="small" className="me-2" />
                        {showPasswordUpdate ? "Cancel Password Update" : "Update Password"}
                      </Button>

                      {showPasswordUpdate && (
                        <Form.Group className="mb-3">
                          <Form.Label>New Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            placeholder="Enter new password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      )}
                    </>
                  )}

                  <div className="d-flex justify-content-between mt-3">
                    {isEditing ? (
                      <Button variant="success" onClick={handleSave}>
                        <SaveIcon className="me-2" /> Save
                      </Button>
                    ) : (
                      <Button variant="primary" onClick={() => setIsEditing(true)}>
                        <EditIcon className="me-2" /> Edit
                      </Button>
                    )}

                    <Button variant="danger" onClick={handleLogout}>
                      <LogoutIcon className="me-2" /> Logout
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>

            {/* Recent Orders Section */}
            <Card className="shadow-sm p-3 mt-4 rounded-4">
              <Card.Title className="mb-3">
                <HistoryIcon className="me-2 text-primary" />
                Recent Orders
              </Card.Title>
             <ListGroup variant="flush">
  {recentOrders.map((order) => (
    <ListGroup.Item key={order.orderId} className="d-flex justify-content-between flex-column flex-md-row align-items-start align-items-md-center">
      <div>
        <strong>
          {order.items.map((item) => item.title).join(", ")}
        </strong>
        <br />
        <small className="text-muted">{order.date}</small>
        {order.appliedCoupon && (
          <div className="text-success">Coupon: {order.appliedCoupon}</div>
        )}
      </div>
      <div className="fw-bold mt-2 mt-md-0">₹{order.totalAmount}</div>
    </ListGroup.Item>
  ))}
</ListGroup>

            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}
