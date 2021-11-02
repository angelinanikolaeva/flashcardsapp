import "./App.scss";
import Navbar from "../src/components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Card from "../src/pages/Cards/Card";
import NotFound from "./components/NotFound";
import { WordsProvider } from "./contexts/WordsContext";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import TableContainer from "./pages/Table/TableContainer";
import Welcome from "./pages/Welcome/Welcome";
import ForgotPassword from "./pages/Authentication/ForgotPassword";

function App() {
  return (
    <AuthProvider>
      <WordsProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <PublicRoute path="/flashcardsapp/forgot">
              <ForgotPassword />
            </PublicRoute>
            <PrivateRoute path="/flashcardsapp/update-profile">
              UPDATE
            </PrivateRoute>
            <PublicRoute path="/flashcardsapp/signup">
              <Signup />
            </PublicRoute>
            <PublicRoute path="/flashcardsapp/login">
              <Login />
            </PublicRoute>
            <Route path="/flashcardsapp/about">About</Route>
            <PrivateRoute path="/flashcardsapp/game">
              <Card />
            </PrivateRoute>
            <PrivateRoute path="/flashcardsapp/dictionary">
              <TableContainer />
            </PrivateRoute>
            <Route exact path="/flashcardsapp/">
              <Welcome />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </WordsProvider>
    </AuthProvider>
  );
}

export default App;
