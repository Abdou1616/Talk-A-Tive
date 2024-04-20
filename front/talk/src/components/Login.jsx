import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 24px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginRight: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  formItem: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  fileInput: {
    marginTop: "5px",
  },
};

export default function Login() {
  const [showLogin, setShowLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    navigate("/Chat");
  };

  const signupSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await axios.post("http://localhost:3000/api/", userData);
      console.log("Signup successful", response.data);
      if (response) {
        navigate("/Chat");
      }
    } catch (error) {
      console.error("Signup error", error.response.data);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Talk-A-Tive</div>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={toggleForm}>
          Login
        </button>
        <button style={styles.button} onClick={toggleForm}>
          Sign up
        </button>
      </div>
      {showLogin ? (
        <div className="login">
          <form style={styles.form} action="" onSubmit={loginSubmit}>
            <div style={styles.formItem}>
              <label style={styles.label} htmlFor="email">
                Email Address
              </label>
              <input style={styles.input} type="text" id="email" name="email" />
            </div>
            <div style={styles.formItem}>
              <label style={styles.label} htmlFor="password">
                Password
              </label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  style={styles.input}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                />
                <button
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <input style={styles.button} type="submit" value="Login" />
          </form>
        </div>
      ) : (
        <div className="signup">
          <form style={styles.form} onSubmit={signupSubmit}>
            <div style={styles.formItem}>
              <label style={styles.label} htmlFor="name">
                Name
              </label>
              <input style={styles.input} type="text" id="name" name="name" />
            </div>
            <div style={styles.formItem}>
              <label style={styles.label} htmlFor="email">
                Email Address
              </label>
              <input style={styles.input} type="text" id="email" name="email" />
            </div>
            <div style={styles.formItem}>
              <label style={styles.label} htmlFor="password">
                Password
              </label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  style={styles.input}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                />
                <button
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div style={styles.formItem}>
              <label style={styles.label} htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                style={styles.input}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
            </div>
            <div style={styles.formItem}>
              <label style={styles.label} htmlFor="image">
                Upload Images:
              </label>
              <input
                style={{ ...styles.input, ...styles.fileInput }}
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <input style={styles.button} type="submit" value="Sign up" />
          </form>
        </div>
      )}
    </div>
  );
}
