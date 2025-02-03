import React from "react";
import InputField from "./InputField";
import Border from "./Border";
import Button from "../Button";
import ImgDiv from "./ImgDiv";
import Facebook from "../assets/Facebook.png";
import google from "../assets/google.png";
import Twitter from "../assets/Twitter.png";
import Eye from "../assets/Eye.png";
import Backimg from '../assets/Back.png'


const Form = () => {
  return (
    
      <section className="rightsection">
        
        <div>
          <h1 className="designfont text-center">Create new account</h1>
          <p className="text-sm opacity-40 text-center">
            Welcome, please enter your detail.
          </p>
        </div>
        <form
          action=""
          className="form"
        >
          <InputField name="Username" />
          <InputField name="Email"/>
          <div>
            <div>
              <InputField className="mb-0.5" name="Password" img={Eye} />
            </div>
            <p className=" text_design_p">*Enter at least 8 characters</p>
            <div className="flex items-center justify-between gap-2">
              <Border />
              <Border />
              <Border />
            </div>
          </div>
          <div>
            <InputField name="Password" img={Eye} />
          </div>
          <div className="paradesign">
            <p className="text-center ">
              I hereby agree to all the contents of the
              <br />
              <span className="spandesigm">Terms of Use </span>and
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
          <div className=" flex justify-center items-center gap-6">
            <ImgDiv img={Facebook} />
            <ImgDiv img={google} />
            <ImgDiv img={Twitter} />
          </div>
        </div>
      </section>
  );
};

export default Form;
