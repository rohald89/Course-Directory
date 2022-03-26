import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../../Context';

const PrivateRoute = ({ children }) => {
  const { authenticatedUser } = useUser();
  const location = useLocation();
  if (!authenticatedUser) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
};
export default PrivateRoute;
