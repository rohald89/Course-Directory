import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useUser } from '../../Context';
import Button from '../shared/Button';
import TextInput from '../shared/TextInput';

const SignUp = () => {
  const { signUp } = useUser();

  const validate = Yup.object({
    firstName: Yup.string().required('First Name is Required'),
    lastName: Yup.string().required('Last Name is Required'),
    emailAddress: Yup.string().required('Email is Required').email('Must be a valid email'),
    password: Yup.string()
      .required('Password is Required')
      .min(8, 'Password must be at least 8 characters')
      .max(20, 'Password must be between 8 and 20 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={signUp}
    >
      {formik => (
        <div className="bg-gray-800 p-8 rounded-lg mt-16 w-11/12 max-w-lg mx-auto">
          <h2 className="text-white text-2xl font-bold my-8">Sign Up</h2>
          {console.log(formik.values)}
          <Form>
            <TextInput label="First Name" name="firstName" type="text" />
            <TextInput label="Last Name" name="lastName" type="text" />
            <TextInput label="Email Address" name="emailAddress" type="email" />
            <TextInput label="Password" name="password" type="password" />
            <TextInput label="Confirm Password" name="confirmPassword" type="password" />
            <div className="flex justify-start gap-4 mt-8">
              <Button type="submit" color="primary">
                Sign In
              </Button>
              <Button type="button" color="secondary">
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
