import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* we are using spread operator to  make sure to store proper value in proper variable*/}
      {/* like {type: "text"} so spread operator will make sure to do type = text */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
