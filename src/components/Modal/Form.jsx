import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import { basicSchema } from "./schemas/index";
import "./Form.css";

// const onSubmit = async (values, actions) => {
//   console.log(values);
//   console.log(actions);
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   actions.resetForm();
//   // setIsClicked(true);
// };

const Form = () => {
  const [isClicked, setIsClicked] = useState(false);

  const formToggle = useRef(null);
  const thankToggle = useRef(null);

  useEffect(() => {
    isClicked
      ? thankToggle.current.classList.remove("form-inactive")
      : formToggle.current.classList.add("form-active");
    
    // isClicked
    //   ? formToggle.current.classList.add("form-active")
    //   : formToggle.current.classList.add("form-active");
    
    
  }, [isClicked]);

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    setIsClicked(true);
    console.log(isClicked)
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="form__wrapper">
      <form onSubmit={handleSubmit} autoComplete="off" className='form-active' ref={formToggle}>
        <div className="input-box">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name ? "input-error" : ""}
          />
          {errors.name && touched.name && (
            <p className="error">{errors.name}</p>
          )}
        </div>

        <div className="input-box">
          <label htmlFor="email">Email:</label>
          <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="Enter your email"
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>

        <button disabled={isSubmitting} type="submit" className="form-btn">
          Submit
        </button>
      </form>

      <div className="form__thanks form-inactive" ref={thankToggle}>
        <h2>Thanks for your time!</h2>
      </div>
    </div>
  );
};
export default Form;
