import { Formik, Form } from "formik";
import { basicSchema } from "../../schemas";
import { createUser } from "../../api/user";
import WrapperInput from "../molecules/WrapperInput";
function FormRegister() {
    return ( 
        <div>
            <h1>Hola estamos en el form register</h1> 
            <Formik
            initialValues={{name:"", email:"", password:""}}
            validationSchema={basicSchema}
            onSubmit={async(values,actions) =>{
          try {
             const response = await createUser(values);
            console.log(values);
            alert("registrado exitosamente como estudiante");
            navigate("/login") 
          } catch (error) {
            console.log(error);
          }
            }}
            >{({ handleChange,errors, handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit} className="form-registro">
                   <h3 className="register-title">Registrate</h3>
                   <div className='inputs-v1'>
                  <WrapperInput   name="name"  type="text" onChange={handleChange} msn="Nombre" placeholder="Nombre" errors={errors.name} CNH1={errors.name == "Obligatorio" ? "error" : ""}/> 
                   </div>
                   <WrapperInput   name="Email"  type="text" onChange={handleChange} msn="Correo electronico" placeholder="Dirección de correo electronico" errors={errors.email} CNH1={errors.mail == "Obligatorio" || errors.mail == "Por favor ingresa la direccion correctamente" ? "error" : ""} />
                  <WrapperInput name="password"  type="password" onChange={handleChange} msn="Contraseña" placeholder="Contraseña" errors={errors.password} CNH1={errors.password == "Obligatorio" || errors.password == "Porfavor ingresa una contraseña más segura" || errors.password == "password must be at least 5 characters" ? "error" : ""}/>   
                  <WrapperInput name="confirmPassword"  type="password" onChange={handleChange} msn="Validar Contraseña" placeholder="Validar Contraseña" errors={errors.confirmPassword} CNH1={errors.confirmPassword == "Obligatorio" || errors.confirmPassword == "Las contraseñas no coinciden" ? "error" : ""} />  
                  <div className="btn-registro">
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Registrandose.." : "Registrarse"}
                  </button>
                  </div>
                </Form>
              )}
                
            </Formik>
        </div>
     );
}

export default FormRegister;