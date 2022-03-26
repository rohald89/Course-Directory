import './index.css';
import Courses from './components/courses/Courses';
import { UserProvider } from './Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/signin/SignIn';
import SignOut from './components/signout/SignOut';
import SignUp from './components/signup/SignUp';
import CourseDetail from './components/courseDetail/CourseDetail';
import CreateCourse from './components/createCourse/CreateCourse';
import PrivateRoute from './components/shared/PrivateRoute';
import Layout from './components/Layout';

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="bg-gray-900 text-white min-h-screen">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Courses />} />
              <Route
                path="/course/create"
                element={
                  <PrivateRoute>
                    <CreateCourse />
                  </PrivateRoute>
                }
              />
              <Route path="/courses/:id" element={<CourseDetail />} />
              {/* <Route path="/courses/:id/update" element={<PrivateRoute />}>
                <Route path="" element={<UpdateCourse />}></Route>
              </Route> */}
              <Route path="signin" element={<SignIn />} />
              <Route path="signout" element={<SignOut />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
