
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

  const handler = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};

    // Username validation (must contain letters and numbers)
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/.test(formValues.username)) {
      newErrors.username = "Username must contain letters and numbers.";
    }

    // Password validation (at least 8 characters)
    if (formValues.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    if(formValues.email === "") {
      newErrors.email = "Email is required.";
    }

    // Confirm password validation
    if (formValues.confirmpassword !== formValues.password) {
      newErrors.confirmpassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
let {username,email}=formValues;
    e.preventDefault();
    if (validate()) {
      alert(`Form Submitted Successfully:\n Username : ${username}\nPassword : ${email}`);
      console.log("Form Submitted Successfully:", formValues);
      formValues.username = "";
      formValues.email = "";
      formValues.password = "";
      formValues.confirmpassword = "";
    }
  };

  return (
    <section className="rightsection">
      <div className="flex gap-2 mr-92 mb-2 "><img src={back} /><a className="text-s text-black/50" href="#">Back</a></div>
      <div>
        <h1 className="designfont text-center">Create new account</h1>
        <p className="text-sm opacity-40 text-center">
          Welcome, please enter your details.
        </p>
      </div>
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

        <InputField
          name="email"
          type="email"
          placeholder="Email"
          onChange={handler}
          value={formValues.email}
        />
          {errors.email && <p className=" text-red-500 text-sm text-start">{errors.email}</p>}

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
        <div className=" flex items-start justify-center flex-col gap-1 h-0.2 w-80 -mt-3">
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
