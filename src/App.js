import './index.css';
import Courses from './components/courses/Courses';
import Header from './components/header/Header';
import { UserProvider } from './Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/signin/SignIn';
import SignOut from './components/signout/SignOut';
import SignUp from './components/signup/SignUp';

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="bg-white dark:bg-gray-900 min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Courses />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signout" element={<SignOut />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
