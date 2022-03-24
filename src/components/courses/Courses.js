import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data));
  };
  console.log(courses);
  return (
    <div className="container mx-auto pt-16 grid gap-4 place-content-stretch md:grid-cols-2 xl:grid-cols-4">
      {courses.map(course => (
        <CourseCard course={course} />
      ))}
      <Link
        to={`/course/create`}
        className="block p-6 max-w-sm h-40 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          + Create a new Course
        </h5>
      </Link>
    </div>
  );
};

export default Courses;
