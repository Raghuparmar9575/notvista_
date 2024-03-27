import * as Yup from "yup";

export const SignupSchema = Yup.object({
  name: Yup.string().min(4).required("Please Enter your name"),
  email: Yup.string().required("Please Enter your email"),

  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Please enter Confirm password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
export const LoginSchema = Yup.object({
  email: Yup.string().required("Please Enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
});
