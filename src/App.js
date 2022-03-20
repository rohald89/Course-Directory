import './App.css';
import Courses from './components/courses/Courses';
import Header from './components/header/Header';
import { UserProvider } from './Context';

const App = () => {
  return (
    <UserProvider>
      <Header />
      <Courses />
    </UserProvider>
  );
};

export default App;
