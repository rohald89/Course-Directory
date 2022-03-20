import { useEffect, useState } from 'react';

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
  return <div>Courses</div>;
};

export default Courses;
