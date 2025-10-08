import * as Yup from "yup";

const userValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Please enter your name"),
  email: Yup.string()
    .email("Please provide a valid email")
    .required("Email cannot be empty"),
  password: Yup.string()
    .min(8, "Password should have at least 8 characters")
    .required("Password cannot be empty"),
});

export default userValidationSchema;
