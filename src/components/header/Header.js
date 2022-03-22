import { Link } from 'react-router-dom';
import { useUser } from '../../Context';

const Header = () => {
  const { authenticatedUser, error, loading } = useUser();

  // const handleSubmit = e => {
  //   signIn('joe@smith.com', 'joepassword');
  // };
  if (error) return <h2>{error.message}</h2>;
  if (loading) return <h2>Loading...</h2>;
  return (
    <div className="bg-purple-600 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold">Course Directory</h1>
        <div className="flex">
          {authenticatedUser ? (
            <>
              <p>Welcome {authenticatedUser.firstName}!</p>
              <Link to="signout" className="ml-4 hover:font-bold">
                Sign Out
              </Link>
            </>
          ) : (
            <>
              <Link to="signup" className="ml-4 hover:font-bold">
                Sign Up
              </Link>
              <Link to="signin" className="ml-4 hover:font-bold">
                Sign In
              </Link>
            </>
          )}
        </div>

        {/* <p>{authenticatedUser ? 'SignOut' : 'SignIn'}</p>
      <button type="button" onClick={handleSubmit}>
        Sign In
      </button> */}
      </div>
    </div>
  );
};

export default Header;
