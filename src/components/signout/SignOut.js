import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Context';

const SignOut = () => {
  const { signOut } = useUser();
  const navigate = useNavigate();
  signOut();
  navigate('/');
  return null;
};

export default SignOut;
