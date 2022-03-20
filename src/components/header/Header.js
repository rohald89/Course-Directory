import { useUser } from '../../Context';

const Header = () => {
  const { authenticatedUser, error, loading, signIn } = useUser();

  const handleSubmit = e => {
    signIn('joe@smith.com', 'joepassword');
  };
  if (error) return <h2>{error.message}</h2>;
  if (loading) return <h2>Loading...</h2>;
  return (
    <div>
      <h1>Header</h1>
      <p>{authenticatedUser ? 'SignOut' : 'SignIn'}</p>
      <button type="button" onClick={handleSubmit}>
        Sign In
      </button>
    </div>
  );
};

export default Header;
