import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../Context';
import Button from '../shared/Button';

const ActionBar = ({ course }) => {
  const { authenticatedUser } = useUser();
  const navigate = useNavigate();
  const { id, user: owner } = course;

  const handleDelete = async () => {
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

  return (
    <div className="bg-gray-800">
      <div className="h-20 container mx-auto flex items-center gap-8">
        {authenticatedUser?.id === owner?.id ? (
          <>
            <Link
              to={`/courses/${id}/update`}
              className="focus:outline-none focus:ring-purple-900 hover:bg-purple-700  px-5 py-2.5 font-medium text-sm rounded-lg text-white bg-purple-600"
            >
              Update
            </Link>
            <Button onClick={handleDelete} type="button" color="primary">
              Delete
            </Button>
          </>
        ) : null}

        <Button type="button" onClick={() => navigate('/')}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
export default ActionBar;
