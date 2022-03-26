import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useUser } from '../../Context';
import Button from '../shared/Button';
import TextareaInput from '../shared/TextareaInput';
import TextInput from '../shared/TextInput';

const CreateCourse = () => {
  const { authenticatedUser } = useUser();
  const navigate = useNavigate();

  const validate = Yup.object({
    title: Yup.string().required('Title is Required'),
    description: Yup.string().required('Description is Required'),
  });

  const createCourse = async newCourse => {
    await fetch('http://localhost:5000/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(
          `${authenticatedUser.emailAddress}:${authenticatedUser.password}`
        )}`,
      },
      body: JSON.stringify({ ...newCourse, userId: authenticatedUser.id }),
    });
    navigate('/');
  };

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
      }}
      validationSchema={validate}
      onSubmit={newCourse => {
        createCourse(newCourse);
      }}
    >
      {formik => (
        <div className="container bg-gray-800 p-8 rounded-lg mt-16 mx-auto">
          <h2 className="text-white text-2xl font-bold my-8">Create a New Course</h2>
          {console.log(formik.values)}
          <Form className="">
            <div className="flex gap-16">
              <div className="basis-2/3">
                <TextInput label="Course Title" name="title" type="text" />
                <TextareaInput label="Course Description" name="description" />
              </div>
              <div className="basis-1/4">
                <TextInput label="Estimated Time" name="estimatedTime" type="text" />
                <TextareaInput label="Materials Needed" name="materialsNeeded" />
              </div>
            </div>

            <div className="flex gap-8 mt-8">
              <Button type="submit" color="primary">
                Create
              </Button>
              <Button type="button" color="secondary">
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
    // <div className="container mx-auto mt-16">
    //   <h2 className="uppercase mb-4 pb-2 border-b-2 border-purple-500 ">Course Title</h2>
    //   <input className="text-4xl mb-2" />
    //   <h3 className="text-purple-200 italic">
    //     By {authenticatedUser?.firstName} {authenticatedUser?.lastName}
    //   </h3>
    //   <div className="mt-8 flex flex-col gap-8 lg:gap-32 lg:flex-row">
    //     <div className="leading-relaxed flex flex-col gap-4 lg:basis-3/4">
    //       <h3 className="uppercase mb-4 pb-2 border-b-2 border-purple-500 ">Course Description</h3>
    //       <textarea></textarea>
    //     </div>
    //     <div className="">
    //       <h3 className="uppercase mb-4 pb-2 border-b-2 border-purple-500 ">Estimated Time</h3>
    //       <p>9000 hours</p>

    //       <h3 className="uppercase mb-4 pb-2 mt-8 border-b-2 border-purple-500 ">
    //         Materials Needed
    //       </h3>
    //       <textarea />
    //     </div>
    //   </div>
    // </div>
  );
};
export default CreateCourse;
