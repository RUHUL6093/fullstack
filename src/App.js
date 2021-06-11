import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Orders from "./Components/Orders/Orders";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Product from "./Components/Product/Product";
import Admin from "./Components/Admin/Admin";

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
          <Route path="/Product/:Name">
            <ProductDetail />
          </Route>
          <Route path="/Product">
            <Product />
          </Route>
          <PrivateRoute path="/Orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/Admin">
            <Admin />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
