import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import useCourse from '../../hooks/useCourse';
import ActionBar from '../actionBar/ActionBar';

const CourseDetail = () => {
  const { id } = useParams();
  const { course } = useCourse();

  return (
    <>
      {/* <ActionBar course={course} /> */}
      <div className="container mx-auto mt-16 flex flex-col gap-8 lg:gap-32 lg:flex-row">
        <div className="leading-relaxed flex flex-col gap-4 lg:basis-3/4">
          <h2 className="text-4xl">{course.title}</h2>
          <h3 className="text-purple-200 italic pb-1 mb-4 gradient-border">
            By {course.user?.firstName} {course.user?.lastName}
          </h3>
          <ReactMarkdown className="prose prose-invert  w-full max-w-none">
            {course.description}
          </ReactMarkdown>
        </div>
        <div className="mt-14">
          <h3 className="uppercase mb-4 pb-2 gradient-border">Estimated Time</h3>
          <p>{course.estimatedTime}</p>

          <h3 className="uppercase mb-4 mt-8 pb-2 gradient-border">Materials Needed</h3>
          <ReactMarkdown className="prose prose-invert">{course.materialsNeeded}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};
export default CourseDetail;
