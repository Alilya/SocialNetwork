//import { Formik } from "formik"; //новая библиотека
import React from "react";
import {Field, reduxForm} from 'redux-form'
import { required } from "../../Utils/Validators";
import { Input } from "../common/FormsControls/FormsControls";
import { connect } from "react-redux";
import {login } from './../../redux/authReducer'
import { Navigate} from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css'
import classes from './login.module.css'

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit} title="Используйте Email: free@samuraijs.com и Password: free ">
      <div>
        <Field
          placeholder="email"
          name="email"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          type="password"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component={"input"} /> Remember
        me
      </div>
      <div>
        {error && <div className={style.errorForm}>{error}</div>}
        <button className={classes.button}>Login</button>
      </div>
    </form>
  );

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
  
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

const Login = ({login,isAuth }) => {
    const onSubmit=(formData)=>{
     login(formData.email,formData.password, formData.rememberMe)
    }
    if(isAuth) return <Navigate to={"/profile"}/>
    else{
      return (
        <div className={classes.mainform}>
          <div className={classes.form}>
            <h1 className={classes.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} className={classes.submit} />
          </div>
        </div>
      );
    }
};

const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth,
})

export default connect (mapStateToProps,{login}) (Login)
