import { Formik } from "formik"; //новая библиотека
import React from "react";
import {Field, reduxForm} from 'redux-form'

const LoginForm = (props) => {
  return (
    // <Formik
    //   initialValues={{ login: "", password: "", email: "", checkbox: "" }}
    //   // validate={values => {
    //   //   const errors = {};
    //   //   if (!values.email) {
    //   //     errors.email = 'Required';
    //   //   } else if (
    //   //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //   //   ) {
    //   //     errors.email = 'Invalid email address';
    //   //   }
    //   //   return errors;
    //   // }}
    //   onSubmit={(values, { setSubmitting }) => {
    //     setTimeout(() => {
    //       alert(JSON.stringify(values, null, 2));
    //       setSubmitting(false);
    //     }, 400);
    //   }}
    // >
    //   {({
    //     values,
    //     errors,
    //     touched,
    //     handleChange,
    //     handleBlur,
    //     handleSubmit,
    //     isSubmitting,
    //   }) => (
    //     <form onSubmit={handleSubmit}>
    //       <div>
    //         <input
    //           type="login"
    //           name="login"
    //           placeholder="login"
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //           value={values.login}
    //         />
    //       </div>
    //       {errors.email && touched.email && errors.email}
    //       <div>
    //         {" "}
    //         <input
    //           type="password"
    //           name="password"
    //           placeholder="password"
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //           value={values.password}
    //         />
    //       </div>
    //       <div>
    //         {" "}
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="email"
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //           value={values.email}
    //         />
    //       </div>
    //       <div>
    //         <input
    //           type="checkbox"
    //           name="remember me"
    //           onChange={handleChange}
    //           onBlur={handleBlur}
    //           value={values.checkbox}
    //         />
    //         Remember me
    //       </div>
    //       {errors.password && touched.password && errors.password}
    //       <button type="submit" disabled={isSubmitting}>
    //         Submit
    //       </button>
    //     </form>
    //   )}
    // </Formik>

     <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Login" name="login" component={'input'}/>
      </div>
      <div>
        <Field placeholder="Password" name="password" component={'input'}/>
      </div>
      <div>
        <Field type="checkbox" name="remember me" component={'input'}/> Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
    );

  
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

const Login = () => {
    const onSubmit=(formData)=>{
        console.log(formData)
    }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>     {/* <LoginForm /> */}
    </div>
  );
};

export default Login;
