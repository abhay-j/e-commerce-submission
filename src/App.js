import "./App.css";
import SignUp from "./components/signup/signup";
import AuthProvider from "./contexts/AuthContext";
import Login from "./components/login/login";
import Checkout from "./components/checkout/checkout";
import Home from "./components/home/home";
import Products from "./components/products/products";
import Details from "./components/details/details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Header from "./components/header/header";
function App() {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <div className="App">
            <Header />
            <Route exact="/" path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route exact path="/shop/:id" component={Products} />
            <Route path="/shop/:id/:id" component={Details} />
            <PrivateRoute path="/checkout" component={Checkout} />
          </div>
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;
