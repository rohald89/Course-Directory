import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../Context';
import useCourse from '../../hooks/useCourse';
import Button from '../shared/Button';

const ActionBar = ({ course }) => {
  const { authenticatedUser } = useUser();
  const navigate = useNavigate();
  const { id, user: owner } = course;
  const { deleteCourse } = useCourse();

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
            <Button onClick={deleteCourse} type="button" color="primary">
              Delete
            </Button>
          </>
        ) : null}

        <Button type="button" onClick={() => navigate('/')}>
          Return
        </Button>
      </div>
    </div>
  );
};
export default ActionBar;
