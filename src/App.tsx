import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/tv">
          <Tv></Tv>
        </Route>
        <Route path="/search">
          <Search></Search>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path={["/", "/movies/:movieId"]}>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
