import { useFormik } from 'formik';
import React from 'react';
import { useUser } from '../../Context';
// import TextInput from '../shared/TextInput';

const SignIn = () => {
  const { signIn } = useUser();

  const formik = useFormik({
    initialValues: {
      emailAddress: '',
      password: '',
    },
    onSubmit: values => {
      signIn(values);
    },
  });
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl text-center font-bold mt-8">Sign In</h2>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="emailAddress"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.emailAddress}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
