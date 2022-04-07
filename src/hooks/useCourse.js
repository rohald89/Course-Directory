import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../Context';

const useCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authenticatedUser } = useUser();
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    user: {
      id: '',
    },
  });

  const getAllCourses = () => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data));
  };

  const getCourse = useCallback(async () => {
    const res = await fetch(`http://localhost:5000/api/courses/${id}`);
    const data = await res.json();
    setCourse(data);
  }, [id]);

  useEffect(() => {
    getCourse();
    getAllCourses();
  }, [getCourse]);

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

  const isOwner = () => authenticatedUser?.id === course?.user.id;

  return { course, courses, createCourse, updateCourse, deleteCourse, isOwner };
};
export default useCourse;
