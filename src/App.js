import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import ToDoPage from './pages/ContactPage';
import PostsPage from "./pages/Post";

function App() {
  return (
    <Router>
      <nav>
        <ul>
        <li>
          <Link to="/todo">ToDo Tasks</Link>
        </li>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
        </ul>
      </nav>
      <Switch>
          <Route path="/todo"><ToDoPage /></Route>
          <Route path="/posts"><PostsPage/></Route>
      </Switch>
    </Router>
  );
}

export default App;
