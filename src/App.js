import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Orders from "./Components/Orders/Orders";
import Deal from "./Components/Deal/Deal";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Product from "./Components/Product/Product";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
          <PrivateRoute path="/Orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/Deal">
            <Deal />
          </PrivateRoute>
          <PrivateRoute path="/Product">
            <Product />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}
