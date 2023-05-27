import { Formik, Form } from "formik";
import { getUsers } from "../../api/user";
import { basicSchema } from "../../schemas";
import Title from "../atoms/Title";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
function FormLogin() {

    return ( 
        <div>
            <h1>Hola estamos en el login </h1>
            <Formik
            initialValues={{email:"", password:""}}
            validationSchema={basicSchema}
            onSubmit={async(values, actions)=>{
                try {
                    const response = await getUsers(values)
                    console.log(values);
                  } catch (error) {
                    console.log(error);
                  }
            }}
            >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit} className='container-login'>
               
                <Title className='title-login' title={"bienvenido"} level={"h2"}/>
                <Label msn={"Email"} />
                <Input
                  type={"text"}
                  name={"email"}
                  onChange={handleChange}
                  value={values.email}
                />
                <Label msn={"Password"} />
                <Input
                  type={"password"}
                  name={"password"}
                  onChange={handleChange}
                  value={values.password}
                />
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Saving.." : "Save"}
                </button>
              </Form>
            )}
            </Formik>
        </div>
     );
}

export default FormLogin;