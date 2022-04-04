import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../Context';

const useCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authenticatedUser } = useUser();
  const [course, setCourse] = useState;

  useEffect(() => {
    getCourse();
  }, [id]);

  const getCourse = async () => {
    const res = await fetch(`http://localhost:5000/api/courses/${id}`);
    const data = await res.json();
    setCourse(data);
  };

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
    navigate(`/courses/${id}`);
  };

  const deleteCourse = async () => {
    await fetch(`http://localhost:5000/api/courses/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(
          `${authenticatedUser.emailAddress}:${authenticatedUser.password}`
        )}`,
      },
    });
    navigate('/');
  };

  return { course, createCourse, updateCourse, deleteCourse };
};
export default useCourse;