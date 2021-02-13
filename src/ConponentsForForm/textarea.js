import React from "react";
import style from "./ComponentsForForm.module.css";
export const TextArea = ({ input, meta, ...props }) => {
  return (
    <div>
      <div>
        <textarea
          {...input}
          {...meta}
          className={`form-control ${
            meta.touched && meta.error && style.error
          }`}
          type="text"
        />
      </div>

      {meta.touched && meta.error && (
        <p className={`badge text-wrap ${style.error}`}>{meta.error}</p>
      )}
    </div>
  );
};
