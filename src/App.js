import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LukeAPIWalker from './components/LukeAPIWalker';


function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Luke API Walker</h1>
        <Form></Form>
        <Switch>
          <Route exact path = "/:list/:id">
            <LukeAPIWalker></LukeAPIWalker>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
