import React from "react";

import { reduxForm, Field } from "redux-form";
import { TextArea } from "./ConponentsForForm/textarea";
import { Input } from "./ConponentsForForm/input";
const requiredField = (value) => {
  if (!!value) {
    return undefined;
  } else {
    return "Field is reqired";
  }
};

const maxLengthValidators = (symbols) => (value) => {
  if (value.length > symbols) {
    return `Количество допустимых символов ${symbols}`;
  }
  return undefined;
};

const maxLength10 = maxLengthValidators(10);
const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <Field
            validate={[requiredField, maxLength10]}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            component={Input}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <Field
            validate={[requiredField, maxLength10]}
            name="text"
            className="form-control"
            id="exampleFormControlTextarea1"
            component={TextArea}
            rows="3"
          ></Field>
          <button className="btn btn-info">click</button>
        </div>
      </form>
      <div>
        {props.user.map((e, index) => {
          return (
            <li key={index} className="list-group-item">
              {e.email}
            </li>
          );
        })}
      </div>
    </div>
  );
};

const ReduxLoginForm = reduxForm({
  form: "login",
})(Form);

const FormWrapper = (props) => {
  const onSubmit = (data) => {
    props.setUser(data);
  };
  return (
    <div>
      <ReduxLoginForm onSubmit={onSubmit} user={props.user} />
    </div>
  );
};

export default FormWrapper;
