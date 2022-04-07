import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import useCourse from '../../hooks/useCourse';
import Button from '../shared/Button';
import TextareaInput from '../shared/TextareaInput';
import TextInput from '../shared/TextInput';

const CreateCourse = () => {
  const { createCourse } = useCourse();
  const navigate = useNavigate();

  const validate = Yup.object({
    title: Yup.string().required('Title is Required'),
    description: Yup.string().required('Description is Required'),
  });

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
              <Button type="button" color="secondary" onClick={() => navigate('/')}>
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default CreateCourse;
