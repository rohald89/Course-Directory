import { Link } from 'react-router-dom';

const ActionBar = ({ id }) => {
  return (
    <div className="h-16 bg-purple-400">
      <div className="container mx-auto flex items-center">
        <Link to={`/courses/${id}/update`}>Update</Link>
        <Link to={`/courses/${id}/update`}>Delete</Link>
        <Link to={`/`}>Cancel</Link>
      </div>
    </div>
  );
};
export default ActionBar;
