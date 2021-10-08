import Main from "./pages/Main/Main";
import "./App.scss";
import Navbar from "../src/components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Card from "../src/pages/Cards/Card";
import NotFound from "./components/NotFound";
import { WordsProvider } from "./contexts/WordsContext";
import words from "./assets/data/words.json";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <WordsProvider value={words}>
          <Route path="/about">About</Route>
          <Route path="/game">
            <Card />
          </Route>
          <Route exact path="/">
            <div className="App">
              <Main />
            </div>
          </Route>
        </WordsProvider>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
