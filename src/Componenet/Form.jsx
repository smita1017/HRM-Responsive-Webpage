import React from "react";
import InputField from "./InputField";
import Backimg from "../assets/Back.png";
import Border from "./Border";
import Button from "../Button";
import ImgDiv from "./ImgDiv";
import Facebook from "../assets/Facebook.png"
import google from "../assets/google.png"
import Twitter from "../assets/Twitter.png"
import Eye from '../assets/Eye.png'


const Form = () => {
  return (
    <section className="sectionright">
    <div className="h-full flex items-center justify-center flex-col gap-1">
      <div className="backbutton flex justify-center items-center gap-3">
        <img className="h-4" src={Backimg} alt="backsymbol" />
        <a href="">back</a>
      </div>
      <div>
        <h1 className="designfont font-bold text-2xl">Create new account</h1>
        <p className="text-sm opacity-35">Welcome, please enter your detail.</p>
      </div>
      <form
        action=""
        className="flex items-center justify-center flex-col gap-5">
        <InputField name="Username" />
        <InputField name="Email" />
        <div >
       <div className=" flex items-center justify-center"><InputField className="mb-0.5" name="Password" /><img className="eyeimg" src={Eye} alt="eyeimg" /></div>
          <p className=" text_design_p">*Enter at least 8 characters</p>
          <div className="flex items-center justify-between gap-2">
            <Border />
            <Border />
            <Border />
          </div>
        </div>
        <div className="flex items-center justify-center"><InputField name="Password" /><img className="eyeimg" src={Eye} alt="eyeimg" /></div>
        <div className="paradesign">
        <p className="text-center">I hereby agree to all the contents of the<br/> Terms of Use <span>and</span> Privacy Policy</p>
        </div>
        <Button name="Sign Up"/>
      </form>
      <div>
        <div className="flex items-center justify-center gap-3">
          <Border/>
          <p>or</p>
          <Border/>
        </div>
        <div className=" flex justify-center items-center gap-6">
       <ImgDiv img={Facebook}/>
       <ImgDiv img={google}/>
       <ImgDiv img={Twitter}/>
        </div>
      </div>
    </div>
   </section>
  );
};

export default Form;
