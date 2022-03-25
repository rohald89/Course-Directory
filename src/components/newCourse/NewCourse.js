import React from 'react';
import { Link } from 'react-router-dom';

const NewCourse = () => {
  return (
    <Link
      to={`/course/create`}
      className="block p-6 max-w-sm h-40 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        + Create a new Course
      </h5>
    </Link>
  );
};

export default NewCourse;
