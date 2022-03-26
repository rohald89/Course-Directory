import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import ActionBar from '../actionBar/ActionBar';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = () => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then(res => res.json())
      .then(data => setCourse(data));
  };

  return (
    <>
      <ActionBar course={course} />
      <div className="container mx-auto mt-16">
        <h2 className="text-4xl mb-2">{course.title}</h2>
        <h3 className="text-purple-200 italic">
          By {course.user?.firstName} {course.user?.lastName}
        </h3>
        <div className="mt-8 flex flex-col gap-8 lg:gap-32 lg:flex-row">
          <div className="leading-relaxed flex flex-col gap-4 lg:basis-3/4">
            <ReactMarkdown className="prose text-white w-full max-w-none">
              {course.description}
            </ReactMarkdown>
          </div>
          <div className="">
            <h3 className="uppercase mb-4 border-b-2 border-purple-500 ">Estimated Time</h3>
            <p>{course.estimatedTime}</p>

            <h3 className="uppercase mb-4 mt-8 border-b-2 border-purple-500 ">Materials Needed</h3>
            <ReactMarkdown className="prose text-white">{course.materialsNeeded}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseDetail;
