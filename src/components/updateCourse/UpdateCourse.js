import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useUser } from '../../Context';
import Button from '../shared/Button';
import TextareaInput from '../shared/TextareaInput';
import TextInput from '../shared/TextInput';

const UpdateCourse = () => {
  const { authenticatedUser } = useUser();
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async () => {
    const res = await fetch(`http://localhost:5000/api/courses/${id}`);
    const data = await res.json();
    setCourse(data);
  };

  const validate = Yup.object({
    title: Yup.string().required('Title is Required'),
    description: Yup.string().required('Description is Required'),
  });

  const updateCourse = async newCourse => {
    await fetch(`http://localhost:5000/api/courses/${id}`, {
      method: 'PUT',
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
      initialValues={course}
      enableReinitialize={true}
      validationSchema={validate}
      onSubmit={async newCourse => {
        await updateCourse(newCourse);
        navigate(`/courses/${id}`);
      }}
    >
      {formik => (
        <div className="container bg-gray-800 p-8 rounded-lg mt-16 mx-auto">
          <h2 className="text-white text-2xl font-bold my-8">Update Course</h2>
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
                Update
              </Button>
              <Button type="button" color="secondary" onClick={() => navigate(`/courses/${id}`)}>
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default UpdateCourse;
