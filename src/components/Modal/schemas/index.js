import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().min(2, "Too short!").required("A name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  status: yup
    .string()
    .oneOf(
      ["joiners", "interested in partnership", "Want to stay in touch"],
      "Invalid Job Type"
    )
    .required("Required"),
});

export const normalSchema = yup.object().shape({
  fullname: yup.string().min(2, "Too short!").required("A name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});
