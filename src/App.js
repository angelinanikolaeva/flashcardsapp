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
            <PublicRoute path="/forgot">
              <ForgotPassword />
            </PublicRoute>
            <PrivateRoute path="/update-profile">UPDATE</PrivateRoute>
            <PublicRoute path="/signup">
              <Signup />
            </PublicRoute>
            <PublicRoute path="/login">
              <Login />
            </PublicRoute>
            <Route path="/about">About</Route>
            <PrivateRoute path="/game">
              <Card />
            </PrivateRoute>
            <PrivateRoute path="/dictionary">
              <TableContainer />
            </PrivateRoute>
            <Route exact path="/">
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
