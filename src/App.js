import './index.css';
import Courses from './components/courses/Courses';
import Header from './components/header/Header';
import { UserProvider } from './Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/signin/SignIn';
import SignOut from './components/signout/SignOut';

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signout" element={<SignOut />} />
          {/* <Route path="signup" element={<SignUp />} /> */}
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
