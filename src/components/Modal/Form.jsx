import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "./schemas/index";
import { useGlobalContext } from "../../context";
import { GiCheckMark } from "react-icons/gi";
import "./Form.css";
import axios from "axios";

const url = "https://mavenfleet.herokuapp.com/api/v2/visitors/sign-up";

const Form = () => {
  const [isClicked, setIsClicked] = useState(true);
  const { closeModal } = useGlobalContext();

  const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    setIsClicked(false);

    // post request to the backend
    try {
      await axios.post(url, {
        email: values.email,
        status: values.status,
        name: values.name,
      });
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  const x = () => {
    closeModal();
    setIsClicked(true);
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
      name: "",
      email: "",
      status: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="form__wrapper">
      <h2>Let's Get Started!</h2>
      {isClicked ? (
        <form
          className="modal__form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
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

          <div className="input-box">
            <label>Job Type</label>
            <select
              name="status"
              onChange={handleChange}
              value={values.status}
              placeholder="choose your next step"
              className={errors.choice && touched.choice ? "input-error" : ""}
            >
              <option value="">Please select a job type</option>
              <option value="joiners">I want to join Mavenfleet.</option>
              <option value="interested in partnership">
                I'm intrigued and want to unravel partnership opportunities.
              </option>
              <option value="Want to stay in touch">
                I want to receive updates.
              </option>
            </select>
            {errors.choice && touched.choice && (
              <p className="error">{errors.choice}</p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="btn submit-btn"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="form__thanks">
          <div className="form__thanks--icon">
            <GiCheckMark className="thanks-icon" />
          </div>
          <h3>You are one step closer to your dream!</h3>
          <button type="button" className="thanks-btn" onClick={x}>
            Done
          </button>
        </div>
      )}
    </div>
  );
};
export default Form;
