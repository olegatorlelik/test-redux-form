import React from "react";
import style from "./ComponentsForForm.module.css";
export const Input = ({ input, meta, ...props }) => {
  console.log(input, meta, props, "zzz");
  return (
    <div>
      <input
        {...input}
        {...meta}
        type="text"
        className={`form-control ${meta.touched && meta.error && style.error}`}
      />
      {meta.touched && meta.error && (
        <p className={`badge text-wrap ${style.error}`}>{meta.error}</p>
      )}
    </div>
  );
};
