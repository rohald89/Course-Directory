import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useUser } from '../../Context';
import Button from '../shared/Button';
import TextInput from '../shared/TextInput';

const SignIn = () => {
  const { signIn } = useUser();
  const navigate = useNavigate();

  const validate = Yup.object({
    emailAddress: Yup.string().required('Email is Required').email('Must be a valid email'),
    password: Yup.string().required('Pasword is Required'),
  });

  return (
    <Formik
      initialValues={{
        emailAddress: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        signIn(values);
        navigate('/');
      }}
    >
      {formik => (
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg mt-16 w-11/12 max-w-lg mx-auto">
          <h2 className="text-white text-2xl text-center font-bold my-8">Sign In</h2>
          {console.log(formik.values)}
          <Form>
            <TextInput label="Email Address" name="emailAddress" type="email" />
            <TextInput label="Password" name="password" type="password" />
            <div className="flex justify-center mt-8">
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

export default SignIn;
