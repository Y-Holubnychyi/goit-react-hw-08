import * as Yup from "yup";

const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&-]{8,}$/;

export const loginProfileSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      passwordRegex,
      "Password must include at least 1 uppercase letter, 1 lowercase letter, and 1 digit"
    ),
});
