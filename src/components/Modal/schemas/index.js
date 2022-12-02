import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  name: yup.string().min(2, "Too short!").required("Required"),
});
