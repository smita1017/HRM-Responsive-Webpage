

import React, { useState } from "react";

const InputField = (props) => {
  const [visible, setVisible] = useState(false);

  // Toggle password visibility
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="inputdesign border-1 border-black/50 flex items-center justify-between">
      <input
        className="bg-white border-0 outline-none w-full"
        placeholder={props.placeholder}
        name={props.name}
        type={props.type === "password" ? (visible ? "text" : "password") : props.type}
        value={props.value}
        onChange={props.onChange}
      />
      {props.type === "password" && (
        <button type="button" className="border-0 btnclass p-2" onClick={toggleVisibility}>
          <img src={props.img} alt="toggle visibility" className="eyeimg" />
        </button>
      )}
    </div>
  );
};

export default InputField;
