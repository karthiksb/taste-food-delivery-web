import "./App.css";
import Home from "./components/Homepage/Home";
import Login from "./components/Loginpage/Login";
import Header from "./components/Header";
import Search from "./components/searchpage/Search";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route exact path="/search">
          <Header />
          <Search />
        </Route>

        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
