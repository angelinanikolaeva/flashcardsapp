import Main from "./pages/Main/Main";
import "./App.scss";
import Navbar from "../src/components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Card from "../src/pages/Cards/Card";
import NotFound from "./components/NotFound";
import DataContainer from "./pages/DataContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/about">About</Route>
        <Route path="/game">
          <DataContainer />
        </Route>
        <Route exact path="/">
          <div className="App">
            <Main />
          </div>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
