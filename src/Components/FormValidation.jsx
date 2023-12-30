import React from "react";
import { Formik } from "formik";
import "./style.css";
const FormValidation = () => {
  return (
    <div className="d-flex flex-column m-4">
      <h2>Feedback Form</h2>
      <div>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Name is Required";
            } else if (!values.email) {
              errors.email = "Email is Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (!values.message) {
              errors.message = "Message is Required";
            }
            return errors;
          }}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="form">
              <input
                placeholder="Name"
                className="formInput"
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
              {errors.name}
              <input
                placeholder="Email"
                className="formInput"
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email}
              <input
                placeholder="Message"
                className="formInput"
                type="text"
                name="message"
                onChange={handleChange}
                value={values.message}
              />
              {errors.message}
              <button type="submit" className="formBtn">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormValidation;
