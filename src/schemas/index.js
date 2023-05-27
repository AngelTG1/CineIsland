import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  mail: yup.string().email("Por favor ingresa la direccion correctamente").required("Obligatorio"),
  name: yup.string().required("Obligatorio"),
  lastName: yup.string().required("Obligatorio"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Porfavor ingresa una contraseña más segura" })
    .required("Obligatorio"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("Obligatorio"),
});

