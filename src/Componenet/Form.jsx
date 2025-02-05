import React, { useState } from "react";
import InputField from "./InputField";
import Border from "./Border";
import Button from "../Button";
import ImgDiv from "./ImgDiv";
import Facebook from "../assets/Facebook.png";
import google from "../assets/google.png";
import Twitter from "../assets/Twitter.png";
import Eye from "../assets/Eye.png";
import back from "../assets/Back.png";

const Form = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});

  // Function to validate a single field
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "username":
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/.test(value)) {
          error = "Username must contain letters and numbers.";
        }
        break;

      case "email":
        if (!/^\S+@\S+\.\S+$/.test(value)) {
          error = "Enter a valid email address.";
        }
        break;

      case "password":
        if (value.length < 8) {
          error = "Password must be at least 8 characters.";
        }
        break;

      case "confirmpassword":
        if (value !== formValues.password) {
          error = "Passwords do not match.";
        }
        break;

      default:
        break;
    }

    return error;
  };

  // Handle input changes and validate fields in real-time
  const handler = (e) => {
    const { name, value } = e.target;
    
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  // Validate all fields before submission
  const validateAll = () => {
    let newErrors = {};
    Object.keys(formValues).forEach((key) => {
      newErrors[key] = validateField(key, formValues[key]);
    });

    setErrors(newErrors);
    return Object.keys(newErrors).every((key) => !newErrors[key]);
  };

  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      setSubmitted(true);
      setSubmittedData({
        username: formValues.username,
        email: formValues.email,
      });
  
      setTimeout(() => setSubmitted(false), 3000); // Hide message after 5 seconds
  
      setFormValues({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
      setErrors({});
    }
  };
  
  

  return (
    <section className="rightsection">
      <div className="backimg flex gap-2 mr-92 mb-2">
        <img src={back} />
        <a className="text-s text-black/50" href="#">Back</a>
      </div>
      <div className="rightboxh1">
        <h1 className="designfont text-center">Create new account</h1>
        <p className="text-sm opacity-40 text-center">
          Welcome, please enter your details.
        </p>
      </div>

      {submitted && (
  <div className="bg-purple-500 border border-green-400 text-white px-4 py-3 rounded relative mb-4 w-100 text-center">
    <strong>Success!</strong> Account created successfully.
    <p><strong>Username:</strong> {submittedData.username}</p>
    <p><strong>Email:</strong> {submittedData.email}</p>
  </div>
)}
      <form onSubmit={handleSubmit} className="form flex items-center justify-center flex-col gap-5">
        <div>
          <InputField
            name="username"
            placeholder="Username"
            onChange={handler}
            value={formValues.username}
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>

        <div>
          <InputField
            name="email"
            type="email"
            placeholder="Email"
            onChange={handler}
            value={formValues.email}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <InputField
            name="password"
            type="password"
            placeholder="Password"
            img={Eye}
            onChange={handler}
            value={formValues.password}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div className="flex items-start justify-center flex-col gap-1 h-0.2 w-80 -mt-3">
          <h6 className="text_design_p">*Enter at least 8 characters</h6>
          <div className="flex items-center justify-center gap-3 -mt-1 ml-2.5">
            <Border /><Border /><Border />
          </div>
        </div>

        <div>
          <InputField
            name="confirmpassword"
            placeholder="Confirm Password"
            onChange={handler}
            value={formValues.confirmpassword}
            img={Eye}
            type="password"
          />
          {errors.confirmpassword && (
            <p className="text-red-500 text-sm">{errors.confirmpassword}</p>
          )}
        </div>

        <div className="paradesign">
          <p className="text-center">
            I hereby agree to all the contents of the
            <br />
            <span className="spandesigm">Terms of Use</span> and
            <span className="spandesigm"> Privacy Policy</span>
          </p>
        </div>

        <Button name="Sign Up" />
      </form>

      <div>
        <div className="flex items-center justify-center gap-3">
          <Border />
          <p>or</p>
          <Border />
        </div>
        <div className="flex justify-center items-center gap-6">
          <ImgDiv img={Facebook} />
          <ImgDiv img={google} />
          <ImgDiv img={Twitter} />
        </div>
      </div>
    </section>
  );
};

export default Form;
