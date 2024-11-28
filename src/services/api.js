import axios from "axios";

const API_HOST = "https://oyster-app-tkav7.ondigitalocean.app"; // Correct full API URL

// Helper function to validate form data
const validateFormData = (data, type) => {
  const { fullName, email, phoneNumber, password } = data;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  // Registration validation
  if (type === "register") {
    if (!fullName || fullName.length < 4 || fullName.length > 50) {
      throw new Error("Full name must be between 4 and 50 characters");
    }
    if (!email || !emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }
    if (!phoneNumber || phoneNumber.length < 10) {
      throw new Error("Phone number must be at least 10 digits");
    }
    if (!password || !passwordRegex.test(password)) {
      throw new Error(
        "Password must contain at least 8 characters, one uppercase letter, one number, and one special character"
      );
    }
  }
  // Login validation
  else if (type === "login") {
    if (!email || !emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }
    if (!password) {
      throw new Error("Password is required");
    }
  }
};

export const registerUser = async (data) => {
  try {
    validateFormData(data, "register");
    const response = await axios.post(`${API_HOST}/auth/register`, {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Registration failed");
    } else {
      throw new Error(error.message || "An unknown error occurred");
    }
  }
};

export const loginUser = async (data) => {
  try {
    validateFormData(data, "login");
    const response = await axios.post(`${API_HOST}/auth/login`, {
      email: data.email,
      password: data.password,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Login failed");
    } else {
      throw new Error(error.message || "An unknown error occurred");
    }
  }
};
