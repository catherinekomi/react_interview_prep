import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Components
import UsersDirectory from './components/UsersDirectory';
import MyUsersDirectory from './components/MyUsersDirectory';
import ToDoList from './components/ToDoList';
import UseStateTextChallenge from './components/UseStateTextChallenge';
import Timer from './components/Timer';
import BlogApplication from './components/BlogApplication';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home Page</Link>
            </li>
            <li>
              <Link to='/users-directory'>Users Directory</Link>
            </li>
            <li>
              <Link to='/my-users-directory'>My Users Directory</Link>
            </li>
            <li>
              <Link to='/todo-list'>Todo List</Link>
            </li>
            <li>
              <Link to='/usestate-text-challenge'>
                Use State Text Challenge
              </Link>
            </li>
            <li>
              <Link to='/timer'>Timer</Link>
            </li>
            <li>
              <Link to='/blog-application'>Blog Application</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/users-directory' element={<UsersDirectory />} />
          <Route path='/my-users-directory' element={<MyUsersDirectory />} />
          <Route path='/todo-list' element={<ToDoList />} />
          <Route
            path='/usestate-text-challenge'
            element={<UseStateTextChallenge />}
          />
          <Route path='/timer' element={<Timer />} />
          <Route path='/blog-application' element={<BlogApplication />} />
          <Route path='/' />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
