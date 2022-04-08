import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import useCourse from '../../hooks/useCourse';
import NewCourse from '../newCourse/NewCourse';

const CourseCard = ({ course }) => {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="block p-6 max-w-sm h-40 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {course.title}
      </h5>
      {/* <p className="font-normal text-gray-700 dark:text-gray-400">{course.description}</p> */}
    </Link>
  );
};

const Courses = () => {
  // const { courses } = useCourse();
  const [courses, setCourses] = useState([]);
  const { data, errors, loading } = useAxios('courses');

  useEffect(() => {
    setCourses(data);
  }, [data]);

  errors.length && <h1>UH OH! An error occurred while fetching your data</h1>;
  loading && <h1>Loading...</h1>;
  return (
    <div className="container mx-auto pt-16 grid gap-4 place-content-stretch md:grid-cols-2 xl:grid-cols-4">
      {courses?.map(course => (
        <CourseCard course={course} key={course.id} />
      ))}
      <NewCourse />
    </div>
  );
};

export default Courses;
